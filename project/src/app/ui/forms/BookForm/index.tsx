import React from 'react';
import { IBookModel } from '../../../core/models/book.model';
import FormGroupInput from '../../elements/FormGroupInput';
import FormGroupSelect from '../../elements/FormGroupSelect';
import FormActions from '../../elements/FormAction';
import './style.css';

interface FormProps {
  booksAvailable: IBookModel[];
  label: string;
  idInput: string
  valueSelect: string;
  setValue: (value: string) => void;
  valueInput: string;
  setValueInput: (value: string) => void;
  handleAddBook: () => void;
  handleSubmit: (event: React.FormEvent) => void;
  newGroup:()=>void;

}

const FormBook: React.FC<FormProps> = ({ booksAvailable, idInput, label, valueSelect, setValue, valueInput, setValueInput, handleAddBook,newGroup,handleSubmit }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <FormGroupSelect
        label='Libro'
        id='book'
        name='book'
        value={valueSelect}
        setValue={setValue}
        options={booksAvailable.map((book) => ({ id: book.Id, title: book.Title }))}

      />
      <FormGroupInput
        label={label}
        type='number'
        id={idInput}
        name={idInput}
        value={valueInput}
        setValue={setValueInput}
      />
      <FormActions title='cotizar' newGroup={newGroup} onAdd={handleAddBook} />
    </form>
  );
};

export default FormBook;