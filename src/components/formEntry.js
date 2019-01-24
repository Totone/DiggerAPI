import React from 'react';
import PropTypes from 'prop-types';

import './formEntry.scss'

const FormEntry = ({
  inputType,
  label,
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <section className="formEntry">
      <label for={id}>{label}</label>
      <input 
        type={inputType}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />    
    </section>
  )
}

FormEntry.PropTypes = {
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

FormEntry.defaultProps = {
  inputType: "text",
  placeholder: '',
}

export default FormEntry;
