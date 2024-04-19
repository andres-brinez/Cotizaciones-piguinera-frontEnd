import { ReactElement, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../core/state/AppContext";
import { IBookModel } from "../../../core/models/book.model";
import { IBookInformationQuotes } from "../../../core/models/book-quotes";
import Swal from "sweetalert2";
import { useCalculateQuotes } from "../../../core/hooks/useQuotes";

export function SectionQuotes(): ReactElement {

    const { state } = useContext(AppContext);

    const [booksAvailable, setBooksbooksAvailable] = useState<IBookModel[]>([]);
    const [selectedBooks, setSelectedBooks] = useState<{ Id: string, Title: string, Quantity: string }[]>([]);
    const [booksQuotes, setBooksQuotes] = useState<IBookInformationQuotes[]>([]); // [ {Id: '1', Quantity: '2'}, {Id: '2', Quantity: '3'}

    // Guarda la información del libro seleccionado
    const [idSelectedBook, idSetSelectedBook] = useState<string>('');
    const [quantityBook, setQuantityBook] = useState<string>('');

    const { quotes, response } = useCalculateQuotes();

    useEffect(() => {
        setBooksbooksAvailable(state.books);
    }, []);

  
    const handleAddBook = () => {
        if (!idSelectedBook || !quantityBook || quantityBook == "0") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, seleccione un libro y una cantidad válida.'
            });

        }
        else {
            const selectedBookInfo = booksAvailable.find(book => book.Id === idSelectedBook);

            if (selectedBookInfo) {
                setSelectedBooks(prevBooks => [...prevBooks, { ...selectedBookInfo, Quantity: quantityBook }]);
                setBooksQuotes(prevBooksQuotes => [...prevBooksQuotes, { Id: idSelectedBook, Cuantity: quantityBook }]);
            }
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        quotes(booksQuotes);
        console.log(response);
    }

    return (
        <section className='sectionQuotes'>
            <h2 className='sectionQuotes__title'>Cotización</h2>
            <form className='sectionQuotes__form' onSubmit={handleSubmit}>
                <label className='sectionQuotes__label' htmlFor='book'>Libro</label>
                <select className='sectionQuotes__input' id='book' name='book' value={idSelectedBook} onChange={(e) => idSetSelectedBook(e.target.value)}>
                    <option value="">Seleccionar</option>
                    {booksAvailable.map((book: IBookModel) => (
                        <option key={book.Id} value={book.Id}>{book.Title}</option>
                    ))}
                </select>

                <label className='sectionQuotes__label' htmlFor='quantity'>Cantidad</label>
                <input className='sectionQuotes__input' type='number' id='quantity' name='quantity' value={quantityBook} onChange={(e) => setQuantityBook(e.target.value)} />
                <button className='sectionQuotes__button' type='button' onClick={handleAddBook}>Agregar Libro</button>
                <button className='sectionQuotes__button' type='submit'>Cotizar</button>
            </form>

            <h2>Libros seleccionados</h2>
            <ul>
                {selectedBooks.map((book) => (
                    <li key={book.Id}>
                        {book.Title} (ID: {book.Id}, Cantidad: {book.Quantity})
                    </li>
                ))}
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                    </tr>
                </thead>
                <tbody>
                    {response && response.books.map((book: any) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.type}</td>
                            <td>{book.unitPrice}</td>
                            <td>{book.totalPrice}</td>
                            <td>{book.cuantity}</td>
                            <td>{book.discount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Precio Total: {response && response.totalPrice}</p>
            <p>Tipo de Compra: {response && response.typePurchase}</p>
            <p>Cantidad de Libros: {response && response.countBook}</p>
        </section>


    );
}