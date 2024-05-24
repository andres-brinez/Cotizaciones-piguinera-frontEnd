import { ReactElement, useState } from 'react';
import { IBookInformationQuotes } from '../../../core/models/book-quote';
import Swal from 'sweetalert2';

import './style.css';
import FormBook from '../../forms/BookForm';
import SelectedBooks from '../SelectedBooks';
import { useBookReducer } from '../../../core/hooks/useBooksReducer';
import { useCalculateQuotes } from '../../../core/hooks/useQuotes';
import QuoteTable from '../QuoteTable';

export function SectionQuotesGroup(): ReactElement {

    const { books } = useBookReducer();

    //const [booksAvailable, setBooksbooksAvailable] = useState<IBookModel[]>([]);
    const [selectedBooks, setSelectedBooks] = useState<{ Id: string, Title: string, Quantity: string, GroupIndex: number }[]>([]);
    const [booksQuotationGroups, setQuotationGroups] = useState<IBookInformationQuotes[][]>([]); // [ {Id: '1', Quantity: '2'}, {Id: '2', Quantity: '3'}

    // Guarda el indice del grupo(lit) actual
    const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(0);

    // Guarda la información del libro seleccionado
    const [idSelectedBook, idSetSelectedBook] = useState<string>('');
    const [quantityBook, setQuantityBook] = useState<string>('');

    const { quotes, response } = useCalculateQuotes();


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
                setSelectedBooks(prevBooks => [...prevBooks, { ...selectedBookInfo, Quantity: quantityBook, GroupIndex: currentGroupIndex }]);
                setQuotationGroups(prevGroups => {
                    const newGroups = [...prevGroups];
                    const currentGroup = newGroups[currentGroupIndex] || [];
                    newGroups[currentGroupIndex] = [...currentGroup, { IdBook: idSelectedBook, Quantity: quantityBook }];
                    return newGroups;
                });
            }
        }
    };

    const handleCreateNewGroup = () => {
        setCurrentGroupIndex(booksQuotationGroups.length);
        setQuotationGroups(prevGroups => [...prevGroups, []]);
    };


    const handleSubmitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        quotes(booksQuotationGroups);
        setSelectedBooks([]);
        setQuantityBook('');
        setQuotationGroups([]);
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
                    {response.quotesInformation.map((quote, quoteIndex) => (
                        <div key={quoteIndex}>
                            <h3>Cotización {quoteIndex + 1}</h3>
                            <QuoteTable quote={quote} />
                        </div>
                    ))}
                    <div className="total-price">
                        <h3>Precio total: {response.totalPrice.toLocaleString('es-ES')}</h3>
                    </div>
                </article>

            )}



        </section>


    );
}