import { IBudgetInformation } from "../models/budget-information";
import { IDataBudget } from "../models/budget.model";
import { urls } from "../resources/url.resource";
import http from "./general/http.service";

export const bookBudget = (informationBooks: IBudgetInformation): Promise<IDataBudget> => {
  const url = urls.budget;
  return http.post(url, informationBooks)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error al obtener el presupuesto');
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
        budget: data.budget
      };
    });
};

