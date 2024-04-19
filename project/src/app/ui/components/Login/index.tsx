import React, { useState } from 'react';
import './style.css';
import { useAuthLogin } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate, errorMessage } = useAuthLogin();

  const handleSubmit = (event: { preventDefault: () => void; }) => {

    event.preventDefault();
    authenticate(email, password);

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