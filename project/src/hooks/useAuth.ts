import { useNavigate } from "react-router-dom";
import { authServiceLogin } from "../core/services/auth.service";
import { useState } from "react";

export const useAuthLogin = () => {

  const navigateTo = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authenticate = (email: string, password: string) => authServiceLogin({ Email: email, password: password }).then((response) => {
    if (response) {
      navigateTo('/home');

    } else {
      setErrorMessage('Las credenciales proporcionadas son incorrectas.');
    }
  })
  return {authenticate,errorMessage};

}