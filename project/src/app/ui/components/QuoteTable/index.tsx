import './style.css';

interface QuoteTableProps {
  quote: {
    books: {
      title: string;
      bookType: string;
      unitPrice: number;
      quantity: number;
      totalPrice: number;
      discount: number;
    }[];
    quoteInfo: {
      quantity: number;
      totalPrice: number;
      tipePurchese: string;
    };
  };
}

const QuoteTable: React.FC<QuoteTableProps> = ({ quote }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Tipo</th>
          <th>Precio Unitario</th>
          <th>Cantidad</th>
          <th>Precio Total</th>
          <th>Descuento</th>
        </tr>
      </thead>
      <tbody>
        {quote.books.map((book, bookIndex) => (
          <tr key={bookIndex}>
            <td>{book.title}</td>
            <td>{book.bookType}</td>
            <td>{book.unitPrice.toLocaleString('es-ES')}</td>
            <td>{book.quantity}</td>
            <td>{book.totalPrice.toLocaleString('es-ES')}</td>
            <td>{book.discount}%</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Datos Adicionales </td>

          <td>
            <ul>
              <li>Cantidad total: {quote.quoteInfo.quantity}</li>
              <li>Precio total: {quote.quoteInfo.totalPrice.toLocaleString('es-ES')}</li>
              <li>Tipo de compra: {quote.quoteInfo.tipePurchese}</li>
            </ul>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default QuoteTable;
