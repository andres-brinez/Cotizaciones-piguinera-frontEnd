import Swal from "sweetalert2";
import { IBookInformationQuotes } from "../models/book-quote";
import { bookQuote } from "../services/quotes.service";
import { IDataQuote } from "../models/quotes-model";
import { useState } from "react";

export const useCalculateQuote = () => {

  const [quoteInformation, setQuoteInformation] = useState<IDataQuote>();

  const quote = (informationBooks: IBookInformationQuotes[]) =>
    bookQuote(informationBooks)
      .then((data) => {
        setQuoteInformation(data);
        Swal.fire({
          icon: 'success',
          title: 'Cotización',
          text: 'Cotización realizada con éxito',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });

  return { quote, response: quoteInformation };

}

