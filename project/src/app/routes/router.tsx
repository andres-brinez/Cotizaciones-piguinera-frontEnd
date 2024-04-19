import { createBrowserRouter } from 'react-router-dom';
import Login from '../ui/components/Login';
import Registro from '../ui/components/Register/Index';
import { SectionBook } from '../ui/components/SectionBook';
import { SectionBudget } from '../ui/components/SectionBudget';
import { Home } from '../ui/components/SectionHome';
import { SectionQuotes } from '../ui/components/SectionQuotes';
import { Layout } from '../ui/layouts';
import { Guard } from './Guard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      // El  componente de element es lo que se renderiza en el outlet
      { path: 'home', element: <Guard><Home /></Guard> },
      { path: 'addBook', element: <Guard><SectionBook /></Guard> },
      { path: 'budget', element: <Guard><SectionBudget /></Guard> },
      { path: 'quotes', element: <Guard><SectionQuotes /></Guard> },
    ],
  },

  {
    path: 'register',
    element: <Registro />,
  },
  {
    path: 'login',
    element: <Login />,
  },



])