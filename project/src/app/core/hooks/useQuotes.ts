import Swal from "sweetalert2";
import { IBookInformationQuotes } from "../models/book-quote";
import { bookQuotes } from "../services/quotes.service";
import { useState } from "react";
import { IBookQuotes } from "../models/book-quotes";

export const useCalculateQuotes = () => {

  const [quotesInformation, setQuotesInformation] = useState<IBookQuotes>();

  const quotes = (informationBooks: IBookInformationQuotes[][]) =>
    bookQuotes(informationBooks)
      .then((data) => {
        setQuotesInformation(data);
        Swal.fire({
          icon: 'success',
          title: 'Cotización',
          text: 'Cotización realizada con éxito',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oopsoooo...',
          text: error.message,
        });
      });

  return { quotes, response: quotesInformation };

}

