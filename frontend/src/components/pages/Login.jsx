import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='flex items-center'>
        <div className="mx-auto max-w-7xl flex flex-col items-center w-full max-w-96 gap-4">
            <h1 className='text-3xl font-bold'>Faça seu login</h1>
            <form className='flex flex-col gap-2 w-full'>
                <input type="email" className='rounded-full border border-gray-300 py-2 px-4 shadow-md w-full' placeholder='Digite seu email'/>
                <input type="password" className='rounded-full border border-gray-300 py-2 px-4 shadow-md w-full' placeholder='Digite sua senha'/>
                <button className='rounded-full border border-gray-300 py-2 px-4 shadow-md w-full cursor-pointer bg-red-500 text-white font-bold'>Login</button>
            </form>
            <p>Ainda não tem conta? <Link to="register" className='underline font-semibold'>Registre-se aqui!</Link></p>
        </div>
      </section>
  )
}

export default Login