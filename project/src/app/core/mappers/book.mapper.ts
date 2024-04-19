import { IBookModel } from "../models/book.model";

export default {

  // convierte a lo que recibe el API los los libros a un model de libros
  toApiBook: (book: IBookModel): unknown => {
    return {
      Id: book.Id,
      Title: book.Title,
      EmailProvider: book.EmailProvider,
      Type: book.Type,
      UnitPrice: book.UnitPrice,
      Discount: book.Discount
    };
  }
}
// Lo convierte a lo que recibe el API de registro
// ApiTo