import { useLogout } from '../../../core/hooks/useLogout';
import { IItemMenu } from '../../../core/models/item-menu.model';
import { ItemMenu } from '../../elements/ItemMenu';

import './style.css';

export function NavigationBar() {

    const logout = useLogout();

    
    const menuItems: IItemMenu[] = [
        {
            text: 'Presupuesto',
            url: '/budget'
        },
        {
            text: 'Cotizacion',
            url: '/quotes'
        },
        
        {
            text: 'Home',
            url: '/home'
        }
    ];

    return (
        <nav className='navbar'>
            <h2 className='navbar__header'>La Pinguinera</h2>
            <ul className='navbar__menu'>
                {
                    menuItems.map((item) => (
                        <li className='navbar__item'>
                            <ItemMenu  key={item.text} text={item.text} url={item.url} />
                        </li>
                    ))
                }
                <li className='navbar__item'>
                <a className='navbar__link' onClick={logout}>Cerrar sesión</a>                </li>
            </ul>
        </nav>
    );
}