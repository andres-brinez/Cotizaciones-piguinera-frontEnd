import { ReactElement, useState } from 'react';
import { useBookAdd } from '../../../core/hooks/useAddBooks';

import './style.css';
// import {FormGroupInput} from '../../ui/elements/FormGroupInput';
// import {FormGroupSelect} from '../../ui/elements/FormGroupSelect';
import Swal from 'sweetalert2';
import FormGroupInput from '../../elements/FormGroupInput';
import FormGroupSelect from '../../elements/FormGroupSelect';

export function SectionBook(): ReactElement {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('0');

    const { addBook, } = useBookAdd();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (!id || !title || !originalPrice || !quantity || !type) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, complete todos los campos',
            });
        }
        else {
            const isSaveBook = addBook(id, title, originalPrice, quantity, type);
            if (await isSaveBook) {
                setId('');
                setTitle('');
                setOriginalPrice('');
                setQuantity('');
                setType('0');
            }
        }
    };

    return (
        <section className='addBook'>
            <header className="home__header header">
                <h2 className='addBook__title header__title'>Agregar Libro</h2>
            </header>
            <form className='form' onSubmit={handleSubmit}>

                <FormGroupInput label='ID del libro' type='text' id='id' name='id' value={id} setValue={setId} />

                <FormGroupInput label='Título' type='text' id='title' name='title' value={title} setValue={setTitle} />

                <FormGroupInput label='Precio original' type='text' id='originalPrice' name='originalPrice' value={originalPrice} setValue={setOriginalPrice} />

                <FormGroupInput label='Cantidad' type='number' id='quantity' name='quantity' value={quantity} setValue={setQuantity} />

                <FormGroupSelect label='Tipo' id='type' name='type' value={type} setValue={setType}
                    options={[
                        { id: '0', title: 'Libro' },
                        { id: '1', title: 'Novela' },
                    ]}
                />

                <button className='addBook__button' type='submit'>Enviar</button>
            </form>
        </section>
    );
}