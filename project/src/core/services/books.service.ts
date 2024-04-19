import { IBookModel } from "../../models/book.model";
import { urls } from "../env/url.resource";
import http from "./general/http.service";


export const getBooksService = (): Promise<IBookModel[]> => {
  const url = urls.getBooks;
  return http.get(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        alert('Error al obtener los libros');
      }
    })
    .then((data) => {
      console.log(data.books)
      if (Array.isArray(data.books)) {
        return data.books.map((book: any) => {
          return {
            Id: book.id,
            Title: book.title,
            EmailProvider: book.emailProvider,
            OriginalPrice: book.originalPrice,
            Quantity: book.quantity,
            Type: book.type,
            UnitPrice: book.unitPrice,
            Discount: book.discount
          }
        });
      } else {
        throw new Error('La respuesta de la API no es un array');
      }
    });
}