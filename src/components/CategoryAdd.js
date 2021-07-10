import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({ setCategories }) => {
  const [category, setCategory] = useState('');

  const handleOnChangeInput = (e) => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (category.trim().length > 1) {
      setCategories((categories) => [category, ...categories]);
      setCategory('');
    }
  };

  const handleOnDelete = () => {
    setCategories(['']);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type='text' value={category} onChange={handleOnChangeInput} />
      </form>
      <input type='submit' value='Limpiar Busqueda' onClick={handleOnDelete} />
    </>
  );
};

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default CategoryAdd;
