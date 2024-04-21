import React from 'react';
import './style.css'

interface FormActionsProps {
  title:string;
  onAdd: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({title,onAdd}) => {
  return (
    <nav className='form__actions'>
      <button className='form__button form__button--add' type='button'  onClick={onAdd} >Agregar Libro</button>
      <button className='form__button form__button--other' type='submit'   >{title}</button>
    </nav>
  );
};

export default FormActions;