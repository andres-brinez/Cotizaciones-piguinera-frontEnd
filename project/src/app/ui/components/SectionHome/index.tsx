import { ReactElement, useContext} from "react";
import { useBooks } from "../../../core/hooks/useBooks";
import { AppContext } from "../../../core/state/AppContext";


export function Home(): ReactElement {

  const {books, isLoading} = useBooks();
   const { state } = useContext(AppContext);

  return (
    <div>
      <h1>Bienvenido al Home {state.email}</h1>
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