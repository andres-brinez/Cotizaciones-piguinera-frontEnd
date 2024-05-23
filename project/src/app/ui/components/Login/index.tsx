import { ReactElement,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthLogin } from '../../../core/hooks/useAuth';
import img from '../../../../assets/libro.jpg';

import '../../styles/style-auth.css';
import { useUser } from '../../../core/hooks/useUser';

const Login = ():ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {errorMessage } = useAuthLogin();
  // const { authenticate, errorMessage } = useAuthLogin();

  const {updateUserLoged} = useUser();
  const navigateTo = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    updateUserLoged(email); // Aquí se pasa el email como payload
    navigateTo('/home');
    //authenticate(email, password);
  }

  return (
    <>
      <main className='auth authLogin'>
        <img src={img} alt="Biblioteca" className="auth__image" />
        <form className="auth__form" onSubmit={handleSubmit}>
          <fieldset className="auth__fieldset">

            <legend className="auth__legend">Iniciar sesión</legend>
            
            <label className="auth__label" htmlFor="email">Correo electrónico</label>
            <input className="auth__input" type="email" name='userEmail' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            
            <label className="auth__label" htmlFor="password">Contraseña</label>
            <input className="auth__input" type="password" name='userPassword' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          </fieldset>
          <button className="auth__button" type="submit">Iniciar sesión</button>
          {/* si el error existe */}
          {errorMessage && <p className="auth__error">{errorMessage}</p>}
          <p>¿No tienes una cuenta? <Link to='/register' className="auth__register-link">Regístrate</Link></p>

        </form>
      </main>

    </>
  );
};

export default Login;

// function dispatch(arg0: { type: string; payload: string; }) {
//   throw new Error('Function not implemented.');
// }
