import React from 'react';

const SimpleForm = ({ text, handleInput }) => (
  <div>
    <input type="text" onInput={handleInput} />
    <h2>{text}</h2>
  </div>
);

export default SimpleForm;