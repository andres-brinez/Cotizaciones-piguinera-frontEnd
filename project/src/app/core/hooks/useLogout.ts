import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StorageService } from "../services/general/storage.service";
import { AppContext } from "../state/AppContext";
import Swal from "sweetalert2";

export const useLogout = () => {
  const { dispatch } = useContext(AppContext);
  const navigateTo = useNavigate();
  const storage = new StorageService();

  const logout = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Estás seguro que deseas cerrar la sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión!'
    });

    if (result.isConfirmed) {
      dispatch({ type: 'USER_LOGGED_OUT' });
      storage.set('TOKEN', '');
      navigateTo('/login');
    }
  }

  return logout;
};
