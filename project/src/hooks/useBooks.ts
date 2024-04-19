import { useEffect, useState } from "react";
import { IBookModel } from "../models/book.model";
import { getBooksService } from "../core/services/books.service";

export const useBooks = ()=>{
  const[books,setBooks] = useState<IBookModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBooksService().then((response) => {
      console.log('response desde el homepage')
      console.log(response)
      if (response) {
        setBooks(response);
      }
      setIsLoading(false);
    });
  }, []);
  return {books,isLoading}
}