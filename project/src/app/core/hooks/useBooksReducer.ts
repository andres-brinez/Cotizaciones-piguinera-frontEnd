import { IBookModel } from "../models/book.model";
import { selecBooks, updateBooks } from "../store/reducers/book.reduce";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useBookReducer = () => {
  // Saca el valor de uno de los estados a travéz de un selector
  const books = useAppSelector(selecBooks);
  const dispatch = useAppDispatch();

  //  updateUserLoged recibe el payload (el email del usuario) y despacha la acción updateInfoUserLoged con ese payload.
  const _updateBooks = (payload: IBookModel[]) => dispatch(updateBooks(payload));

  return {
    books,
    _updateBooks,
  }

}