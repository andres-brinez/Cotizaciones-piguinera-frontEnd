import { ReactElement, useContext } from 'react';
import { useBooks } from '../../../core/hooks/useBooks';
import { AppContext } from '../../../core/state/AppContext';
import { ItemMenu } from '../../elements/ItemMenu';
import './style.css';


export function Home(): ReactElement {
  const { books, isLoading } = useBooks();
  const { state } = useContext(AppContext);

  return (
    <section className="home">

      <header className="home__header header">
        <h1 className="header__title">Bienvenido {state.email}</h1>
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
                  <td>{book.Type === 0 ? 'Libro' : 'Novela'}</td>
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