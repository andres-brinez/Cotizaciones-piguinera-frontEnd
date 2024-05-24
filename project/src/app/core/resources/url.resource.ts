import { environment } from '../../../environment/environment';

export const urls = {
  registerUser: `${environment.apiUrl}/Supplier/register`,
  login: `${environment.apiUrl}/auth/login`,

  addBook: `${environment.apiUrl}/quotes/CalculateBookPay`,
  quote: `${environment.apiUrl}/quotes/CalculateBooksPay`,
  quotes: `${environment.apiUrl}/Book/calculateBooksQuotes`,

  budget: `${environment.apiUrl}/quotes/CalculateBooksBudget`,

  getBooks: `${environment.apiUrl}/Book/GetAllBooks`,




}