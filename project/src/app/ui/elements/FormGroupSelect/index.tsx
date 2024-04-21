import React from 'react';

interface SelectProps {
  label: string;
  id: string;
  name: string;
  value: string;
  options: { id: string; title: string }[];
  setValue: (value: string) => void;

  //onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormGroupSelect: React.FC<SelectProps> = ({ label, id, name, value, options, setValue: valueSelect }) => {
  return (
    <fieldset className='form__group'>
      <label className='form__label' htmlFor={id}>{label}</label>
      <select className='form__select' id={id} name={name} value={value} onChange={(e) => valueSelect(e.target.value)}>
        <option value="">Seleccionar</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>{option.title}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default FormGroupSelect;