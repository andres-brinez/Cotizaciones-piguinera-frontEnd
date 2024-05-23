import { useLogout } from '../../../core/hooks/useLogout';
import { IItemMenu } from '../../../core/models/item-menu.model';
import { ItemMenu } from '../../elements/ItemMenu';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import './style.css';
import img from '../../../../assets/Pingüinera .png';

export function NavigationBar() {

    const logout = useLogout();
    const location = useLocation();

    const menuItems: IItemMenu[] = [
        {
            text: 'Presupuesto',
            url: '/budget',
            imgSrc: '/src/assets/budget.svg'

        },
        {
            text: 'Cotización',
            url: '/quote',
            imgSrc: '/src/assets/quotes.svg'

        },
        {
            text: 'Cotizaciones',
            url: '/quotes',
            imgSrc: '/src/assets/quotes.svg'

        },

        {
            text: 'Inicio',
            url: '/home',
            imgSrc: 'src/assets/Home.svg'

        }
    ];

    return (
        <nav className='navbar'>
            <img src={img} alt="Logo de la pinguinera" className='navbar__logo' />
            <ul className='navbar__menu'>
                {
                    menuItems.map((item) => (
                        <li className={`navbar__item ${location.pathname === item.url ? 'navbar__item--active' : ''}`} key={item.text}>
                            {item.imgSrc && <ReactSVG src={item.imgSrc} className="navbar__item-img" />}
                            <ItemMenu text={item.text} url={item.url} />
                        </li>
                    ))
                }

            </ul>

                <a className='navbar__link' onClick={logout}>Cerrar sesión</a>
        </nav>

    );
}