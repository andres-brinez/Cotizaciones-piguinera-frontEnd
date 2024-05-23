import { environment } from '../../../environment/environment';

export const urls = {
  registerUser: `${environment.apiUrl}/Supplier/register`,
  login: `${environment.apiUrl}/auth/login`,
  
  addBook: `${environment.apiUrl}/quotes/CalculateBookPay`,
  quotes: `${environment.apiUrl}/quotes/CalculateBooksPay`,
  budget: `${environment.apiUrl}/quotes/CalculateBooksBudget`,

  getBooks: `${environment.apiUrl}/Book/GetAllBooks`,


  

}