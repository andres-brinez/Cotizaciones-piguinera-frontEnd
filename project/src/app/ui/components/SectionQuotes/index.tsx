import { ReactElement, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../core/state/AppContext";
import { IBookModel } from "../../../core/models/book.model";
import { IBookInformationQuotes } from "../../../core/models/book-quotes";
import Swal from "sweetalert2";
import { useCalculateQuotes } from "../../../core/hooks/useQuotes";

import './style.css'
import FormBook from "../../forms/BookForm";

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

    const handleSubmitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        quotes(booksQuotes);
    }

    return (
        <section className='sectionQuotes'>
            <header className="home__header header">
                <h2 className='sectionQuotes__title header__title'>Cotización</h2>
            </header>

            <article className="select__books">
                {selectedBooks.length > 0 && (
                    <div className="selected-books__article">
                        <h2 className="selected-books__title">Libros seleccionados</h2>
                        <ul className="selected-books__list">
                            {selectedBooks.map((book) => (
                                <li key={book.Id} className="selected-books__item">
                                    {book.Title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <FormBook 
                booksAvailable={booksAvailable}
                label="Cantidad"
                idInput="quantity"
                valueSelect={idSelectedBook}
                setValue={idSetSelectedBook}
                valueInput={quantityBook}
                setValueInput={setQuantityBook}
                handleAddBook={handleAddBook}
                handleSubmit={handleSubmitForm} />
            </article>

            {response && (
                <article className="result">
                    <h2>Resultado cotización</h2>
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
                            {response && response.books.map((book: any) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.Type === 0 ? 'Libro' : 'Novela'}</td>
                                    <td>{book.unitPrice}</td>
                                    <td>{book.cuantity}</td>
                                    <td>{book.totalPrice}</td>
                                    <td>{book.discount}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Datos Adicionales </td>

                                <td>
                                    <ul>
                                        <li>Precio Total: {response && response.totalPrice}</li>
                                        <li>Tipo de Compra: {response && response.typePurchase}</li>
                                        <li>Cantidad de Libros: {response && response.countBook}</li>
                                    </ul>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </article>

            )}



        </section>


    );
}