interface IBookQuote {
  Title: string;
  Type: number;
  UnitPrice: number;
  TotalPrice: number;
  Quantity: number;
  Discount: string;
}

export interface IDataQuote {
  books: IBookQuote[];
  totalPrice: number;
  typePurchase: string;
  countBook: number;
}