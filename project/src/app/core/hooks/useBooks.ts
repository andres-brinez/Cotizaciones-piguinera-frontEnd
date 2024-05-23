import { useEffect, useState } from "react";
import { getBooksService } from "../services/books.service";
import { useBookReducer } from "./useBooksReducer";

export const useBooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {_updateBooks} = useBookReducer();


  useEffect(() => {
    setIsLoading(true);
    getBooksService().then((response) => {
      console.log('response desde el homepage')
      console.log(response)
      if (response) {
        _updateBooks(response);
      }
      setIsLoading(false);
    });
  }, []);
  return {isLoading }
}

