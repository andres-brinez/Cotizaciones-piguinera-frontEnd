import { ReactElement } from "react";

export function SectionBook():ReactElement{
    return(
        <section className='addBook'>
            <h2 className='addBook__title'>Agregar Libro</h2>
            <div className='addBook__content'>
                <div className='addBook__form'>
                    <form className='addBook__form'>
                        <label className='addBook__label' htmlFor='name'>Nombre</label>
                        <input className='addBook__input' type='text' id='name' name='name' />
                        <label className='addBook__label' htmlFor='email'>Correo</label>
                        <input className='addBook__input' type='email' id='email' name='email' />
                        <label className='addBook__label' htmlFor='phone'>Teléfono</label>
                        <input className='addBook__input' type='tel' id='phone' name='phone' />
                        <label className='addBook__label' htmlFor='message'>Mensaje</label>
                        <textarea className='addBook__textarea' id='message' name='message'></textarea>
                        <button className='addBook__button' type='submit'>Enviar</button>
                    </form>
                </div>
                <div className='addBook__image'>
                    {/* <img className='addBook__img' src={addBook} alt='Agregar Libro' /> */}
                </div>
            </div>
        </section>
    );
}