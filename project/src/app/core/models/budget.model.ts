interface IBook {
  Title: string;
  Type: number;
  UnitPrice: number;
  TotalPrice: number;
  Quantity: number;
  Discount: string;
}

export interface IDataBudget {
  books: IBook[];
  budget: number;
}