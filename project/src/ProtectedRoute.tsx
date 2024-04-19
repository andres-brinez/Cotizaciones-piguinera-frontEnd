import { useContext } from "react"
import { AppContext } from "./state/AppContext"
import { Navigate } from "react-router-dom";

// Se encarga de proteger las rutas de la aplicación
// Si el usuario no está logueado, lo redirige a la página de autenticación
// Si el usuario está logueado, muestra el contenido de la ruta protegida
// Guard
export const ProtectedRoute = ({ children }: any) => {
  const { state } = useContext(AppContext); // Obtiene el estado global de la aplicación

  if (!state.isUserLogged) {
    return <Navigate to='/login' replace />
  }

  return children;
}