import { ReactElement, useEffect, useState } from 'react';
import { IBookInformationQuotes } from '../../../core/models/book-quotes';
import Swal from 'sweetalert2';
import { useCalculateQuotes } from '../../../core/hooks/useQuotes';

import './style.css';
import FormBook from '../../forms/BookForm';
import SelectedBooks from '../SelectedBooks';
import { useBookReducer } from '../../../core/hooks/useBooksReducer';

export function SectionQuotesGroup(): ReactElement {

    const { books } = useBookReducer();

    //const [booksAvailable, setBooksbooksAvailable] = useState<IBookModel[]>([]);
    const [selectedBooks, setSelectedBooks] = useState<{ Id: string, Title: string, Quantity: string,  GroupIndex:number    }[]>([]);
    const [booksQuotationGroups, setQuotationGroups] = useState<IBookInformationQuotes[][]>([]); // [ {Id: '1', Quantity: '2'}, {Id: '2', Quantity: '3'}

    // Guarda el indice del grupo(lit) actual
    const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(0);

    // Guarda la información del libro seleccionado
    const [idSelectedBook, idSetSelectedBook] = useState<string>('');
    const [quantityBook, setQuantityBook] = useState<string>('');

    const { quotes, response } = useCalculateQuotes();

    useEffect(() => {
        //setBooksbooksAvailable(state.books);
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
            const selectedBookInfo = books.find(book => book.Id === idSelectedBook);
            if (selectedBookInfo) {
                setSelectedBooks(prevBooks => [...prevBooks, { ...selectedBookInfo, Quantity: quantityBook,GroupIndex: currentGroupIndex}]);
                setQuotationGroups(prevGroups => {
                    const newGroups = [...prevGroups];
                    const currentGroup = newGroups[currentGroupIndex] || [];
                    newGroups[currentGroupIndex] = [...currentGroup, { Id: idSelectedBook, Quantity: quantityBook, GroupIndex: currentGroupIndex }];
                    return newGroups;
                });
            }
        }
    };

    const handleCreateNewGroup = () => {
        setCurrentGroupIndex(booksQuotationGroups.length);
        setQuotationGroups(prevGroups => [...prevGroups, []]);
    };

    console.log(booksQuotationGroups);


    const handleSubmitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
     quotes(booksQuotationGroups);
    }

    return (
        <section className='sectionQuotes'>
            <header className="header">
                <h2 className='sectionQuotes__title header__title'>Cotizaciones en grupo</h2>
            </header>

            <article className="select__books">
                <SelectedBooks selectedBooks={selectedBooks} currentIndexGruop={currentGroupIndex} />
                <FormBook booksAvailable={books} label="Cantidad" idInput="quantity" valueSelect={idSelectedBook} setValue={idSetSelectedBook} valueInput={quantityBook} setValueInput={setQuantityBook} handleAddBook={handleAddBook}
                    newGroup={handleCreateNewGroup}
                    handleSubmit={handleSubmitForm}
                    />

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
                                    <td>{book.type === 0 ? 'Libro' : 'Novela'}</td>
                                    <td>{Math.floor(book.unitPrice).toLocaleString('es-ES')}</td>
                                    <td>{book.cuantity}</td>
                                    <td>{Math.floor(book.totalPrice).toLocaleString('es-ES')}</td>
                                    <td>{book.discount}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Datos Adicionales </td>

                                <td>
                                    <ul>
                                        <li>Precio Total: {Math.floor(response.totalPrice).toLocaleString('es-ES')}</li>
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