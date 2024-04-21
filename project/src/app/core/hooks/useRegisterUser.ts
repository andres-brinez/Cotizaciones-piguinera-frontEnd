import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceRegister } from "../services/auth.service";
import Swal from "sweetalert2";

export const useRegister = () => {

  const navigateTo = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const register = (email: string, password: string, userName: string) => authServiceRegister({ Email: email, Password: password, UserName: userName })
    .then((response) => {
      if (response) {
        Swal.fire({
          title: '¡Usuario creado!',
          text: 'El usuario se ha creado con éxito.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        navigateTo('/login');
        
      } else {
        setErrorMessage('El usuario ya existe.');
      }
    })
  return { register, errorMessage };

}