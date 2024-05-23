import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../../../core/hooks/useRegisterUser';
import img from '../../../../assets/libro 2.jpg'

import '../../styles/style-auth.css';


const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register, errorMessage } = useRegister();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    register(email, password, name);
  };

  return (
    <>
      <main className='auth'>
      <img src={img} alt="Biblioteca" className="auth__image" />
        <form className="auth__form" onSubmit={handleSubmit}>
    
          <fieldset className="auth__fieldset">
            <legend className="auth__legend">Registro</legend>

            <label className="auth__label" htmlFor="name">Nombre</label>
            <input className="auth__input" type="text" name='userName' id="name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label className="auth__label" htmlFor="email">Correo electrónico</label>
            <input className="auth__input" type="email" name='userEmail' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className="auth__label" htmlFor="password">Contraseña</label>
            <input className="auth__input" type="password" name='userPassword' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </fieldset>

          {/* si el error existe */}
          <button className="auth__button" type="submit">Registrarse</button>
          {errorMessage && <p className="auth__error">{errorMessage}</p>}
          <p>¿Ya tienes una cuenta? <Link to='/login' className="auth__register-link">Inicia sesión</Link></p>

        </form>
      </main>
    </>
  );
};

export default Registro;