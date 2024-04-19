import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useRegister } from '../../../core/hooks/useRegisterUser';
// import { Header } from '../Header';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const {register,errorMessage } = useRegister();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    register(email, password,name);

 };

  return (
    <>
      <h2 className='subtitle'>Register</h2>
      <form className="registro" onSubmit={handleSubmit}>

        <label className="registro__label" htmlFor="name">Nombre:</label>
        <input className="registro__input" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label className="registro__label" htmlFor="email">Correo electrónico:</label>
        <input className="registro__input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label className="registro__label" htmlFor="password">Contraseña:</label>
        <input className="registro__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {errorMessage && <p className="registro__error">{errorMessage}</p>}

        <button className="registro__button" type="submit">Registrarse</button>
      </form>
      <Link to='/login'>
        <button>Inicia sesión</button>
      </Link>   
    </>
  );
};

export default Registro;