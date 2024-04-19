import { useContext } from "react";
import { Link, useNavigate, } from 'react-router-dom';
import { AppContext } from "../../state/AppContext";
import { StorageService } from "../../core/services/general/storage.service";

export function NavigationBar() {

    const { dispatch } = useContext(AppContext);
    const navigateTo = useNavigate();
    const storage = new StorageService();

    const handleLogout = () => {

        const isLogout = window.confirm('¿Estás seguro que deseas cerrar la sesión?');
        if (isLogout) {
            dispatch({ type: 'USER_LOGGED_OUT' });
            storage.set('TOKEN', '');
            navigateTo('/login');
        }

    };

    return (
        <nav className='header__nav'>
            <ul>
                <li>
                    <Link className='header__link' to='/budget'>Presupuesto</Link>
                </li>
                <li>
                    <Link className='header__link' to='/quotes'>Cotizacion</Link>
                </li>
                <li>
                    <Link className='header__link' to='/addBook'>Add Book</Link>
                </li>
                <li>
                    <Link className='header__link' to='/home'>Home</Link>
                </li>
                <li>
                    <a onClick={handleLogout}>Cerrar sesión</a>
                </li>
            </ul>
        </nav>
    );
}