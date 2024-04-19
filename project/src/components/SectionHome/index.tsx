import { ReactElement, useEffect, useState } from "react";
import { getBooksService } from "../../core/services/books.service";
import { IBookModel } from "../../models/book.model";

export function Home(): ReactElement {

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

  return (
    <div>
      <h1>Bienvenido al Home</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {books && books.length > 0 ? (
            books.map((book) => (
              <li key={book.Id}>
                <h2>Titulo del libro:{book.Title}</h2>
                <p>Email provider: {book.EmailProvider}</p>
                <p>Tipo: {book.Type === 0 ? 'Libro' : 'Novela'}</p>
                <p>Precio unitario:{book.UnitPrice}</p>
                <p>Descuento: {Math.round(book.Discount * 100)}%</p>     
              </li>
            ))
          ) : (
            <p>No hay libros disponibles</p>
          )}
        </ul>
      )}
    </div>
  );
}