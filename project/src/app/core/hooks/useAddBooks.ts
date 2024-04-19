import { addBookService } from "../services/books.service";
import { useContext } from "react";
import { AppContext } from "../state/AppContext";
import Swal from "sweetalert2";

export const useBookAdd = () => {

  const { state } = useContext(AppContext);

  const addBook = (id: string, title: string, originalPrice: string, quantity: string, type: string) =>
    addBookService({ Id: id, Title: title, OriginalPrice: originalPrice, EmailProvider: state.email, Quantity: quantity, Type: type })
      .then((data) => {
        Swal.fire({
          icon: 'success',
          title: ` ${data.Title} ha sido agregado`,  });
        return true;
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });

return { addBook };

}

