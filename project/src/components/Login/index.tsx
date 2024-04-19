import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { authServiceLogin } from '../../core/services/auth.service';
// import { Header } from '../Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const navigateTo = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setErrorMessage('');

    authServiceLogin({ Email: email, password: password }).then((response) => {
      if (response) {
        navigateTo('/home');

      } else {
        setErrorMessage('Las credenciales proporcionadas son incorrectas.');
      } 
    })
  }

  return (
    <>
      <h2 className='subtitle'> Loguear</h2>
      <form className="login" onSubmit={handleSubmit}>
        <fieldset>
        <legend className="login__legend">Iniciar sesión ingresa tus credenciales</legend>
        <label className="login__label" htmlFor="email">Correo electrónico:</label>
        <input className="login__input" type="email" name='userEmail' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label className="login__label" htmlFor="password">Contraseña:</label>
        <input className="login__input" type="password" name='userPassword' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        </fieldset>

        {/* si el erro existe */}
        {errorMessage && <p className="login__error">{errorMessage}</p>}

        <button className="login__button" type="submit">Iniciar sesión</button>
      </form>
      <Link to='/register'>
        <button>Regístrate</button>
      </Link>    </>
  );
};

export default Login;