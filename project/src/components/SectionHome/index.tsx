import { ReactElement} from "react";
import { useBooks } from "../../hooks/useBooks";


export function Home(): ReactElement {

  const {books, isLoading} = useBooks();

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