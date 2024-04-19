import { IBookInformation } from "../models/book-information";
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
  },

  toApiBookAdd : (informationBook: IBookInformation): unknown => {
    return {
      Id: informationBook.Id,
      EmailProvider: informationBook.EmailProvider,
      Title: informationBook.Title,
      OriginalPrice: informationBook.OriginalPrice,
      Quantity: informationBook.Quantity,
      Type: Number(informationBook.Type)

    }
  }

}

// Lo convierte a lo que recibe el API de registro
// ApiTo