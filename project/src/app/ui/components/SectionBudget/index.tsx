import { ReactElement, useContext, useEffect, useState } from "react";
import { IBookModel } from "../../../core/models/book.model";
import { IBudgetInformation } from "../../../core/models/budget-information";
import { AppContext } from "../../../core/state/AppContext";
import Swal from "sweetalert2";
import { useCalculateQuotes } from "../../../core/hooks/useCalculateBudget";

export function SectionBudget(): ReactElement {

    const { state } = useContext(AppContext);

    const [booksAvailable, setBooksbooksAvailable] = useState<IBookModel[]>([]);
    const [selectedBooks, setSelectedBooks] = useState<{ Id: string, Title: string }[]>([]);
    const [booksBudget, setBooksBudget] = useState<IBudgetInformation>();

    const [idSelectedBook, idSetSelectedBook] = useState<string>('');
    const [quantityBudget, setQuantityBudget] = useState<string>('');
    const { budget, response } = useCalculateQuotes();


    useEffect(() => {
        setBooksbooksAvailable(state.books);
    }, []);

    const handleAddBook = () => {
        if (!idSelectedBook || idSelectedBook == "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, seleccione un libro para agregar.'
            });

        }
        else {
            const selectedBookInfo = booksAvailable.find(book => book.Id === idSelectedBook);

            if (selectedBookInfo) {
                setSelectedBooks(prevBooks => [...prevBooks, { ...selectedBookInfo, }]);
                // libro agregado
                Swal.fire({
                    icon: 'success',
                    title: 'Libro agregado',
                    text: 'El libro se ha agregado correctamente.'
                });
            }
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const bookId = selectedBooks.map(book => book.Id);
        const bookQuantity = quantityBudget;
        setBooksBudget({ IdBooks: bookId, Budget: parseInt(bookQuantity) });

        if (booksBudget !== undefined) {
            const isGetBuget = budget(booksBudget);
            if(await isGetBuget){
                setSelectedBooks([]);
            }
        }

    }

return (
    <section className='sectionBudget'>
        <h2 className='sectionBudget__title'>Presupuesto</h2>
        <div className='sectionBudget__content'>
            <div className='sectionBudget__form'>
                <form className='sectionBudget__form' onSubmit={handleSubmit}>
                    <label className='sectionBudget__label' htmlFor='book'>Libro</label>
                    <select className='sectionBudget__input' id='book' name='book' value={idSelectedBook} onChange={(e) => idSetSelectedBook(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {booksAvailable.map((book: IBookModel) => (
                            <option key={book.Id} value={book.Id}>{book.Title}</option>
                        ))}
                    </select>
                    <label className='sectionQuotes__label' htmlFor='quantity'>Presupuesto</label>
                    <input className='sectionQuotes__input' type='number' id='quantity' name='quantity' value={quantityBudget} onChange={(e) => setQuantityBudget(e.target.value)} />
                    <button className='sectionQuotes__button' type='button' onClick={handleAddBook}>Agregar Libro</button>
                    <button className='sectionQuotes__button' type='submit'>Cotizar</button>
                </form>
            </div>
            <h2>Libros seleccionados</h2>
            <ul>
                {selectedBooks.map((book) => (
                    <li key={book.Id}>
                        {book.Title}
                    </li>
                ))}
            </ul>
            <table>
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
                        <tr key={book.title}>
                            <td>{book.title}</td>
                            <td>{book.type}</td>
                            <td>{book.unitPrice}</td>
                            <td>{book.cuantity}</td>
                            <td>{book.totalPrice}</td>
                            <td>{book.discount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Presupuestos: {response && quantityBudget}</p>

        </div>
    </section>
);
}