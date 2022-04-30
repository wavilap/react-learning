import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({
  placeholder = 'Buscar...',
  onSearch,
}) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </form>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Search;