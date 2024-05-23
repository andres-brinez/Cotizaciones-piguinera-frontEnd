import { ReactElement} from 'react';
import { useBooks } from '../../../core/hooks/useBooks';
import { ItemMenu } from '../../elements/ItemMenu';
import './style.css';
import { useUser } from '../../../core/hooks/useUser';
import { useBookReducer } from '../../../core/hooks/useBooksReducer';


export function Home(): ReactElement {
  const {isLoading } = useBooks();
  const {books} = useBookReducer();

  const {user} = useUser();

  return (
    <section className="home">

      <header className="home__header header">
        <h1 className="header__title">Bienvenido {user}</h1>
      </header>

      <nav className="home__actions">
        <ul>
          <li>
            <ItemMenu key="addBook"  text="Añadir libro" url="/addBook" />
          </li>
         {/*  <li>
            <a href="#" className="home__button home__button--edit">Editar</a>
          </li>
          <li>
            <a href="#" className="home__button home__button--delete">Eliminar</a>
            </li> */}
        </ul>
      </nav>

      {isLoading ? (
        <p className="home__loading">Cargando...</p>
      ) : (
        <table className="home__book-table table">
          <thead>
            <tr>
              <th>
              </th>
              <th>Título del libro</th>
              <th>Email provider</th>
              <th>Tipo</th>
              <th>Precio unitario</th>
              <th>Descuento</th>
            </tr>
          </thead>
          <tbody>
            {books && books.length > 0 ? (
              books.map((book) => (
                <tr key={book.Id}>
                  <td><input type="checkbox" /></td>
                  <td>{book.Title}</td>
                  <td>{book.EmailProvider}</td>
                  <td>{book.Type === "BOOK" ? 'Libro' : 'Novela'}</td>
                  <td>{Math.floor(book.UnitPrice).toLocaleString('es-ES')}</td>
                  <td>{Math.round(book.Discount * 100)}%</td>
                </tr>
              ))
            ):(
              <tr>
                <td colSpan={6}>No hay libros disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </section>
  );
}