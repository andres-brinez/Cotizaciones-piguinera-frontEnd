import React from 'react';

interface TableProps {
  headers: string[];
  books:any[];
}

const Table: React.FC<TableProps> = ({ headers, books }) => {
  console.log(books);
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.title}>
            <td>{book.title}</td>
            <td>{book.Type === 0 ? 'Libro' : 'Novela'}</td>
            <td>{book.unitPrice}</td>
            <td>{book.cuantity}</td>
            <td>{book.totalPrice}</td>
            <td>{book.discount}</td>
          </tr>
        ))
        }
      </tbody>
    </table>
  );
};

export default Table;
