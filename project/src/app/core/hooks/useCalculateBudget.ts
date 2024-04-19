import Swal from "sweetalert2";
import { useState } from "react";
import { bookBudget } from "../services/budget.service";
import { IBudgetInformation } from "../models/budget-information";
import { IDataBudget } from "../models/budget.model";

export const useCalculateQuotes = () => {

  const [budgetInformation, setBudgetInformation] = useState<IDataBudget>();

  const budget = (informationBooks:IBudgetInformation) =>

    bookBudget(informationBooks)
      .then((data) => {
        setBudgetInformation(data);
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Cotización',
          text: 'Cotización realizada con éxito',
        });
        return true;
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });

return {budget,response:budgetInformation };

}

