import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useAuthLogin } from '../../../core/hooks/useAuth';

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
      <main className='auth'>
        <form className="auth__form" onSubmit={handleSubmit}>
          <fieldset className="auth__fieldset">
            <legend className="auth__legend">Iniciar sesión</legend>
            <label className="auth__label" htmlFor="email">Correo electrónico</label>
            <input className="auth__input" type="email" name='userEmail' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className="auth__label" htmlFor="password">Contraseña</label>
            <input className="auth__input" type="password" name='userPassword' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </fieldset>

          {/* si el error existe */}
          <button className="auth__button" type="submit">Iniciar sesión</button>
          {errorMessage && <p className="auth__error">{errorMessage}</p>}
          <p>¿No tienes una cuenta? <Link to='/register' className="auth__register-link">Regístrate</Link></p>

        </form>
      </main>

    </>
  );
};

export default Login;