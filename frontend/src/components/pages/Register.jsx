import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

const Register = ({setUser}) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  };

  if(redirect) return <Navigate to="/"/>

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-7xl max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu Cadastro</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full rounded-full border border-gray-300 px-4 py-2 shadow-md"
            placeholder="Digite seu email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2 shadow-md"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2 shadow-md"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full cursor-pointer rounded-full border border-gray-300 bg-red-500 px-4 py-2 font-bold text-white shadow-md">
            Registrar
          </button>
        </form>
        <p>
          Ja tem uma conta?{" "}
          <Link to="/login" className="font-semibold underline">
            Logue aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;