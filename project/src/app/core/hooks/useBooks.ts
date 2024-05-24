import { useEffect, useState } from "react";
import { getBooksService } from "../services/books.service";
import { useBookReducer } from "./useBooksReducer";
import { IBookModel } from "../models/book.model";

export const useBooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {_updateBooks} = useBookReducer();
  const [books, setBooks] = useState<IBookModel[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getBooksService().then((response) => {
      console.log('response desde el homepage')
      console.log(response)
      if (response) {
        setBooks(response);
        _updateBooks(response);
      }
      setIsLoading(false);
    });
  }, []);
  return {isLoading,books }
}

