import React from 'react';
import './style..css'

interface Book {
  Id: string;
  Title: string;
  Quantity: string;
  GroupIndex:number

}


interface SelectedBooksProps {
  selectedBooks: Book[];
  currentIndexGruop: number;

}

const SelectedBooks: React.FC<SelectedBooksProps> = ({ selectedBooks,currentIndexGruop }) => {
  if (selectedBooks.length === 0) {
    return null;
  }

  return (
    <div className="selected-books__container">
      <h2 className="selected-books__title">Libros seleccionados</h2>
      <ul className="selected-books__list">
        {selectedBooks.map((book) => (
          <li key={book.Id} className="selected-books__item">
           Nombre: {book.Title} , Cantidad:{book.Quantity}, Grupo:{book.GroupIndex+1}
          </li>
        ))}
      </ul>
      <p className='selected-books__group' >Grupo actual:{currentIndexGruop+1} </p>
    </div>
  );
};

export default SelectedBooks;