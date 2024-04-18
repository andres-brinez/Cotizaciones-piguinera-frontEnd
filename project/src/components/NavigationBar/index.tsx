import { Link } from "react-router-dom";

export function NavigationBar() {
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
                    <Link className='header__link' to='/login'>Salir</Link>
                </li>
            </ul>
        </nav>
    );
}