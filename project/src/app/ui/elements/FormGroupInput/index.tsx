import React from 'react';

interface FormGroupProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, type, id, name, value, setValue }) => {
  return (
    <fieldset className='form__group'>
      <label className='form__label' htmlFor={id}>{label}</label>
        <input className='form__input' type={type} id={id} name={name} value={value} onChange={(e) => setValue(e.target.value)}  />     
    </fieldset>
  );
};

export default FormGroup;