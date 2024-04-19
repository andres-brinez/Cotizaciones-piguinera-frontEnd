import Swal from "sweetalert2";
import { IBookInformationQuotes } from "../models/book-quotes";
import { bookQuotes } from "../services/quotes.service";
import { IDataQuote } from "../models/quotes-model";
import { useState } from "react";

export const useCalculateQuotes = () => {

  const [quoteInformation, setQuoteInformation] = useState<IDataQuote>();

  const quotes = (informationBooks:IBookInformationQuotes[]) =>
    bookQuotes(informationBooks)
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

return {quotes,response:quoteInformation };

}

