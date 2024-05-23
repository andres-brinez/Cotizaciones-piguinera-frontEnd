import { selecUser, updateInfoUserLoged } from "../store/reducers/user.reduce";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useUser = () => {
  // Saca el valor de uno de los estados a travéz de un selector
  const user = useAppSelector(selecUser);
  const dispatch = useAppDispatch();

  //  updateUserLoged recibe el payload (el email del usuario) y despacha la acción updateInfoUserLoged con ese payload.
  const updateUserLoged = (payload: string) => dispatch(updateInfoUserLoged(payload));

  return {
    user,
    updateUserLoged,
  }
}