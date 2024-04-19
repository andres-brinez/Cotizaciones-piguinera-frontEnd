import { useNavigate } from "react-router-dom";
import { authServiceLogin } from "../core/services/auth.service";
import { useContext, useState } from "react";
import { AppContext } from "../state/AppContext";

export const useAuthLogin = () => {

  const navigateTo = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const {dispatch} = useContext(AppContext);

  const authenticate = (email: string, password: string) => authServiceLogin({ Email: email, password: password }).then((response) => {
    if (response) {
      dispatch({ type: 'USER_LOGGED' });
      navigateTo('/home');

    } else {
      setErrorMessage('Las credenciales proporcionadas son incorrectas.');
    }
  })
  return {authenticate,errorMessage};

}