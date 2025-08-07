import Header from "./components/header";
import Home from "./components/pages/home";
import Login from "./components/pages/Login";
import Register from './components/pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

axios.default.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Header user={user}/>

        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/login" element = {<Login user = {user}setUser={setUser}/>}/>
          <Route path="/Register" element = {<Register setUser={setUser}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
