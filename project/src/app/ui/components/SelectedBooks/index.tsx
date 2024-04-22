import React from 'react';

interface Book {
  Id: string;
  Title: string;
}

interface SelectedBooksProps {
  selectedBooks: Book[];
}

const SelectedBooks: React.FC<SelectedBooksProps> = ({ selectedBooks }) => {
  if (selectedBooks.length === 0) {
    return null;
  }

  return (
    <div className="selected-books__container">
      <h2 className="selected-books__title">Libros seleccionados</h2>
      <ul className="selected-books__list">
        {selectedBooks.map((book) => (
          <li key={book.Id} className="selected-books__item">
            {book.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedBooks;