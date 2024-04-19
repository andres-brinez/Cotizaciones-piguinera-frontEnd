import { ReactElement, useState } from "react";
import { useBookAdd } from "../../../core/hooks/useAddBooks";

export function SectionBook(): ReactElement {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('0');

    const { addBook,} = useBookAdd();


    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const isSaveBook= addBook(id, title, originalPrice, quantity, type );
        if( await isSaveBook){
            setId('');
            setTitle('');
            setOriginalPrice('');
            setQuantity('');
            setType('0');
        }
    };

    return (
        <section className='addBook'>
            <h2 className='addBook__title'>Agregar Libro</h2>
            <form className='addBook__form' onSubmit={handleSubmit}>

                <fieldset>
                    <label className='addBook__label' htmlFor='id'>ID del libro</label>
                    <input className='addBook__input' type='text' id='id' name='id' value={id} onChange={(e) => setId(e.target.value)} />

                    <label className='addBook__label' htmlFor='title'>Título</label>
                    <input className='addBook__input' type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label className='addBook__label' htmlFor='originalPrice'>Precio original</label>
                    <input className='addBook__input' type='text' id='originalPrice' name='originalPrice' value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} />

                    <label className='addBook__label' htmlFor='quantity'>Cantidad</label>
                    <input className='addBook__input' type='number' id='quantity' name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />

                    <label className='addBook__label' htmlFor='type'>Tipo</label>
                    <select className='addBook__input' id='type' name='type' value={type} onChange={(e) => setType(e.target.value)}>
                        <option value='0'>Libro</option>
                        <option value='1'>Novela</option>
                    </select>
                </fieldset>

                <button className='addBook__button' type='submit'>Enviar</button>
            </form>
        </section>
    );
}