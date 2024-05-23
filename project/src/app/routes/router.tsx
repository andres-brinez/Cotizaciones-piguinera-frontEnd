import { createBrowserRouter } from 'react-router-dom';
import Login from '../ui/components/Login';
import Registro from '../ui/components/Register/Index';
import { SectionBudget } from '../ui/components/SectionBudget';
import { SectionBook } from '../ui/components/SectionBook';

import { Home } from '../ui/components/SectionHome';
import { SectionQuote } from '../ui/components/SectionQuote';
import { Layout } from '../ui/layouts';
import { SectionQuotesGroup } from '../ui/components/SectionQuotesGroup';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      // El  componente de element es lo que se renderiza en el outlet
      // { path: 'home', element: <Guard><Home /></Guard> },
      // { path: 'addBook', element: <Guard><SectionBook /></Guard> },
      // { path: 'budget', element: <Guard><SectionBudget /></Guard> },
      // { path: 'quotes', element: <Guard><SectionQuotes /></Guard> },
      { path: 'home', element: <Home /> },
      { path: 'addBook', element: <SectionBook /> },
      { path: 'budget', element: <SectionBudget /> },
      { path: 'quote', element: <SectionQuote /> },
      { path: 'quotes', element: <SectionQuotesGroup /> },

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