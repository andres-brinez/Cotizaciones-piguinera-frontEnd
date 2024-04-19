import { IBookInformationQuotes } from "../models/book-quotes";
import { IDataQuote } from "../models/quotes-model";
import { urls } from "../resources/url.resource";
import http from "./general/http.service";

export const bookQuotes = (informationBooks:IBookInformationQuotes[]): Promise<IDataQuote> => {
  const url = urls.quotes;
  return http.post(url, informationBooks)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error al obtener la cotización');
      }
    })
    .then((data) => {
      return {
        books: data.books.map((book: any) => ({
          title: book.title,
          type: book.type,
          unitPrice: book.unitPrice,
          totalPrice: book.totalPrice,
          cuantity: book.cuantity,
          discount: book.discount
        })),
        totalPrice: data.totalPrice,
        typePurchase: data.typePurchase,
        countBook: data.countBook
      };
    });
};
