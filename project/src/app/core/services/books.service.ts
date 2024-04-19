import bookMapper from "../mappers/book.mapper";
import { IBookInformation } from "../models/book-information";
import { IBookModel } from "../models/book.model";
import { urls } from "../resources/url.resource";
import http from "./general/http.service";


export const getBooksService = (): Promise<IBookModel[]> => {
  const url = urls.getBooks;
  return http.get(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.log('Error al obtener los libros');
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

export const addBookService = (bookInformation: IBookInformation): Promise<IBookModel> => {
  
  const url = urls.addBook;
  const body = bookMapper.toApiBookAdd(bookInformation);
  return http.post(url, body)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error al agregar el libro'); 
      }
    })
    .then((data) => {
      return {
        Id: data.id,
        Title: data.title,
        EmailProvider: data.emailProvider,
        OriginalPrice: data.originalPrice,
        Quantity: data.quantity,
        Type: data.type,
        UnitPrice: data.unitPrice,
        Discount: data.discount
      }
    });
}