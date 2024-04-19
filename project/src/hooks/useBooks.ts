import { useContext, useEffect, useState } from "react";
import { IBookModel } from "../models/book.model";
import { getBooksService } from "../core/services/books.service";
import { AppContext } from "../state/AppContext";

export const useBooks = ()=>{
  const[,setBooks] = useState<IBookModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {state,dispatch} = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    getBooksService().then((response) => {
      console.log('response desde el homepage')
      console.log(response)
      if (response) {
        setBooks(response);
        dispatch({ type: 'BOOKS_GOTTEN', payload: response });
      }
      setIsLoading(false);
    });
  }, []);
  return {books:state.books,isLoading}
}