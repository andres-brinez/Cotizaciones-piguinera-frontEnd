import { useNavigate } from "react-router-dom";
import { StorageService } from "../services/general/storage.service";
import Swal from "sweetalert2";
import { useUser } from "./useUser";

export const useLogout = () => {
  const navigateTo = useNavigate();
  const storage = new StorageService();
  const {updateUserLoged} = useUser();


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
      updateUserLoged("");
      storage.set('TOKEN', '');
      navigateTo('/login');
    }
  }

  return logout;
};
