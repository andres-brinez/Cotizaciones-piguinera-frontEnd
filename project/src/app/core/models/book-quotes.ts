interface BookInfo {
  idSupplier: string;
  title: string;
  quantity: number;
  bookType: string;
  discount: number;
  unitPrice: number;
  totalPrice: number;
}

interface QuoteInfo {
  quantity: number;
  totalPrice: number;
  tipePurchese: string;
}

interface QuoteInformation {
  books: BookInfo[];
  quoteInfo: QuoteInfo;
}

export interface IBookQuotes {
  idSupplier: string;
  quotesInformation: QuoteInformation[];
  totalPrice: number;
}
