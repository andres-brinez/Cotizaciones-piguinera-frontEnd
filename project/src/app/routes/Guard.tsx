import { ReactNode, useContext } from "react"
import { Navigate } from "react-router-dom";
import { AppContext } from "../core/state/AppContext";

// Se encarga de proteger las rutas de la aplicación
// Si el usuario no está logueado, lo redirige a la página de autenticación
// Si el usuario está logueado, muestra el contenido de la ruta protegida
// Guard

interface IGuardProps {
  children: ReactNode;
}

export const Guard = ({ children }: IGuardProps) => {
  const { state } = useContext(AppContext); // Obtiene el estado global de la aplicación

  if (!state.isUserLogged) {
    return <Navigate to='/login' replace />
  }

  return children;
}