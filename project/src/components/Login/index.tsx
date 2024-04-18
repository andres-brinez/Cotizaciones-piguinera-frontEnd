import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
// import { Header } from '../Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Aquí se envia la información a la API
    alert(`¡Hola ${email}! estas logueado!`);
  };

  return (
    <>
      <h2 className='subtitle'> Loguear</h2>
      <form className="login" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">Correo electrónico:</label>
        <input className="login__input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label className="login__label" htmlFor="password">Contraseña:</label>
        <input className="login__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button className="login__button" type="submit">Iniciar sesión</button>
      </form>
      <Link to='/register'>
        <button>Regístrate</button>
      </Link>    </>
  );
};

export default Login;