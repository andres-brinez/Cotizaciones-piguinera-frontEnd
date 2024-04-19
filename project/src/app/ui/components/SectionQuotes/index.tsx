import { ReactElement } from "react";

export function SectionQuotes():ReactElement {
    return (
        <section className='sectionQuotes'>
            <h2 className='sectionQuotes__title'>Cotización</h2>
            <div className='sectionQuotes__content'>
                <div className='sectionQuotes__form'>
                    <form className='sectionQuotes__form'>
                        <label className='sectionQuotes__label' htmlFor='name'>Nombre</label>
                        <input className='sectionQuotes__input' type='text' id='name' name='name' />
                        <label className='sectionQuotes__label' htmlFor='email'>Correo</label>
                        <input className='sectionQuotes__input' type='email' id='email' name='email' />
                        <label className='sectionQuotes__label' htmlFor='phone'>Teléfono</label>
                        <input className='sectionQuotes__input' type='tel' id='phone' name='phone' />
                        <label className='sectionQuotes__label' htmlFor='message'>Mensaje</label>
                        <textarea className='sectionQuotes__textarea' id='message' name='message'></textarea>
                        <button className='sectionQuotes__button' type='submit'>Enviar</button>
                    </form>
                </div>
                <div className='sectionQuotes__image'>
                    {/* <img className='sectionQuotes__img' src={quotes} alt='Cotización' /> */}
                </div>
            </div>
        </section>
    );
}