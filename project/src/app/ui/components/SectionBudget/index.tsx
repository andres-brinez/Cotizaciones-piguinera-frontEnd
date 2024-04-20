import { ReactElement, useContext, useEffect, useState } from "react";
import { IBookModel } from "../../../core/models/book.model";
import { IBudgetInformation } from "../../../core/models/budget-information";
import { AppContext } from "../../../core/state/AppContext";
import Swal from "sweetalert2";
import { useCalculateQuotes } from "../../../core/hooks/useCalculateBudget";
import './style.css'

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

        if (quantityBudget === "" || quantityBudget === "0") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, seleccione una cantidad válida.'
            });
        }
        else {
            const bookId = selectedBooks.map(book => book.Id);
            const bookQuantity = quantityBudget;
            setBooksBudget({ IdBooks: bookId, Budget: parseInt(bookQuantity) });

            if (booksBudget !== undefined) {
                const isGetBuget = budget(booksBudget);
                if (await isGetBuget) {
                    setSelectedBooks([]);
                }
            }

        }

    }

    return (
        <section className='sectionBudget'>
            <header className="home__header header">
                <h2 className='sectionQuotes__title header__title'>Presupuesto</h2>
            </header>
            <article className="select__books">
                {selectedBooks.length > 0 && (
                    <article className="selected-books__article">
                        <h2 className="selected-books__title">Libros seleccionados</h2>
                        <ul className="selected-books__list">
                            {selectedBooks.map((book) => (
                                <li key={book.Id} className="selected-books__item">
                                    {book.Title}
                                </li>
                            ))}
                        </ul>
                    </article>
                )}

                <form className='form' onSubmit={handleSubmit}>
                    <fieldset className='form__group'>
                        <label className='form__label' htmlFor='book'>Libro</label>
                        <select className='form__input' id='book' name='book' value={idSelectedBook} onChange={(e) => idSetSelectedBook(e.target.value)}>
                            <option value="">Seleccionar</option>
                            {booksAvailable.map((book: IBookModel) => (
                                <option key={book.Id} value={book.Id}>{book.Title}</option>
                            ))}
                        </select>
                    </fieldset>

                    <fieldset className='form__group'>
                        <label className='form__label' htmlFor='quantity'>Presupuesto</label>
                        <input className='form__input' type='number' id='quantity' name='quantity' value={quantityBudget} onChange={(e) => setQuantityBudget(e.target.value)} />
                    </fieldset>


                    <nav className='form__actions'>
                        <button className='form__button form__button--add' type='button' onClick={handleAddBook}>Agregar Libro</button>
                        <button className='form__button form__button--other' type='submit'>Realizar presupuesto</button>
                    </nav>                
                </form>
            </article>


            {response && (
                <article className="result__budget">
                    <h2>Resultado presupuesto</h2>

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
                                <tr key={book.title}>
                                    <td>{book.title}</td>
                                    <td>{book.Type === 0 ? 'Libro' : 'Novela'}</td>
                                    <td>{book.unitPrice}</td>
                                    <td>{book.cuantity}</td>
                                    <td>{book.totalPrice}</td>
                                    <td>{book.discount}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>Presupuesto: {response && quantityBudget}</tfoot>
                    </table>
                </article>
            )}


        </section>
    );
}