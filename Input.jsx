import React from 'react';

const Input = (props) => {
  const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '300px',
    boxSizing: 'border-box',
    marginBottom: '16px',
    fontSize: '16px',
  };

  return (
    <input
      style={inputStyle}
      className='input-field'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
