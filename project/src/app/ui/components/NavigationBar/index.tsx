import { useContext } from "react";
import { Link, useNavigate, } from 'react-router-dom';
import { AppContext } from "../../state/AppContext";
import { StorageService } from "../../core/services/general/storage.service";
import { IItemMenu } from "../../../core/models/item-menu.model";
import { ItemMenu } from "../../elements/ItemMenu";

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
            text: 'Add Book',
            url: '//addBookervices'
        },
        {
            text: 'Home',
            url: '/home'
        }
    ];

    return (
        <nav className='header__nav'>
            <ul className='header__menu'>
                {
                    menuItems.map((item) => (
                        <ItemMenu key={item.text} text={item.text} url={item.url} />
                    ))
                }
                <li>
                    <a onClick={handleLogout}>Cerrar sesión</a>
                </li>
            </ul>
        </nav>
    );
}