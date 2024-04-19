import { ReactElement } from "react";

export function SectionBudget(): ReactElement {
    return (
        <section className='sectionBudget'>
            <h2 className='sectionBudget__title'>Presupuesto</h2>
            <div className='sectionBudget__content'>
                <div className='sectionBudget__form'>
                    <form className='sectionBudget__form'>
                        <label className='sectionBudget__label' htmlFor='name'>Nombre</label>
                        <input className='sectionBudget__input' type='text' id='name' name='name' />
                        <label className='sectionBudget__label' htmlFor='email'>Correo</label>
                        <input className='sectionBudget__input' type='email' id='email' name='email' />
                        <label className='sectionBudget__label' htmlFor='phone'>Teléfono</label>
                        <input className='sectionBudget__input' type='tel' id='phone' name='phone' />
                        <label className='sectionBudget__label' htmlFor='message'>Mensaje</label>
                        <textarea className='sectionBudget__textarea' id='message' name='message'></textarea>
                        <button className='sectionBudget__button' type='submit'>Enviar</button>
                    </form>
                </div>
                <div className='sectionBudget__image'>
                    {/* <img className='sectionBudget__img' src={budget} alt='Presupuesto' /> */}
                </div>
            </div>
        </section>
    );
}