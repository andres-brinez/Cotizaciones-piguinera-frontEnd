// Agrupación de la aplicación, segundo punto de entrada
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Provider } from "react-redux"
import { store } from './core/store/store';

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>

  );
};