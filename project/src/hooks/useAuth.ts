import { useNavigate } from "react-router-dom";
import { authServiceLogin } from "../core/services/auth.service";
import { useContext, useState } from "react";
import { AppContext } from "../state/AppContext";
import { jwtDecode } from "jwt-decode";

export const useAuthLogin = () => {

  const navigateTo = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const {dispatch} = useContext(AppContext);

  const authenticate = (email: string, password: string) => authServiceLogin({ Email: email, password: password }).then((response) => {
    
    const token = response;
    
    if (token) {
      const decodedToken = jwtDecode(token) as { [key: string]: any };
      const email = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'];      
      dispatch({ type: 'USER_LOGGED', payload: email });

      navigateTo('/home');
    } else {
      setErrorMessage('Las credenciales proporcionadas son incorrectas.');
    }
  })
  return {authenticate,errorMessage};

}