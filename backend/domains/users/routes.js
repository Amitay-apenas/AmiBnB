import { Router } from "express";
import { connectDB } from '../../config/db.js';
import User from './models.js';
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get('/', async (req, res) => {
    connectDB();

    try {
        const userDoc = await User.find();
        res.json(userDoc);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) =>{
    connectDB();

    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/login', async (req, res) =>{
    connectDB();

    const {email, password} = req.body;
    
    try{
        const userDoc = await User.findOne({email});
        
        if (userDoc) {
            const passwordCorret = bcrypt.compareSync(password, userDoc.password);
            const {name, _id} = userDoc;
            
            passwordCorret ? res.json({name, email, _id}) : res.status(400).json("Invalid password");  
        } else {
            res.status(400).json("User not found")
        }
        
    }catch(error){
         res.status(500).json(error);
    }
});

export default router;