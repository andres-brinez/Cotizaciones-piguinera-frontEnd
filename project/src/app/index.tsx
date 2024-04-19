// Agrupación de la aplicación, segundo punto de entrada
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { AppProvider } from './core/state/AppContext';

// import { router } from './routes/router';
// import { AppProvider } from './core/state/AppContext';
export const App = (): ReactElement => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};