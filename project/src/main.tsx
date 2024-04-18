import ReactDOM from 'react-dom/client'
import Registro from './components/Register/Index'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import { Layout } from './layouts'
import { SectionBook } from './components/SectionBook'
import { SectionBudget } from './components/SectionBudget'
import { SectionQuotes } from './components/SectionQuotes'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      // El  componente de element es lo que se renderiza en el outlet
      { path: 'addBook', element: <SectionBook /> },
      { path: 'budget', element: <SectionBudget /> },
      { path: 'quotes', element: <SectionQuotes /> },
    ],
  },
  
 {
    path: 'register',
    element:<Registro />,
  }, 
  {
    path: 'login',
    element:<Login />,
  },



])

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={router} />
)