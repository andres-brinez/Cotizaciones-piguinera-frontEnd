import { IBookInformationQuotes } from "../models/book-quote";
import { IBookQuotes } from "../models/book-quotes";
import { IDataQuote } from "../models/quotes-model";
import { urls } from "../resources/url.resource";
import http from "./general/http.service";

export const bookQuote = (informationBooks: IBookInformationQuotes[]): Promise<IDataQuote> => {
  const url = urls.quote;
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

export const bookQuotes = (informationBooks: IBookInformationQuotes[][]): Promise<IBookQuotes> => {
  const url = urls.quotes;
  return http.post(url, toApiQuotes(informationBooks))
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error al obtener la cotización');
      }
    })
    .then((data: any) => {
      return {
        
        idSupplier: data.idSupplier,
        quotesInformation: data.quotesInformation.map((quote: any) => ({
          books: quote.books.map((book: any) => ({
            idSupplier: book.idSupplier,
            title: book.title,
            quantity: book.quantity,
            bookType: book.bookType,
            discount: book.discount,
            unitPrice: book.unitPrice,
            totalPrice: book.totalPrice
          })),
          quoteInfo: {
            quantity: quote.quoteInfo.quantity,
            totalPrice: quote.quoteInfo.totalPrice,
            tipePurchese: quote.quoteInfo.tipePurchese
          }
        })),
        totalPrice: data.totalPrice
      };
    });
};


// convierte a lo que recibe el API los los libros a un model de libros
function toApiQuotes(book: IBookInformationQuotes[][]){
  return {
    informationBooks: book,
    IdSupplier: "Hola",

  };
}
