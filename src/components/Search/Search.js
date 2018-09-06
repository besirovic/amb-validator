import React from 'react';

import './search.css';

const Search = props => {
  const { onSearchChange, onSearch } = props;

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        autoComplete="off"
        placeholder="Search for asset..."
        onKeyUp={onSearchChange}
      />
      <button
        className="search__button mdc-fab mdc-fab--extended mdc-ripple-upgraded"
        onClick={onSearch}>
        <i className="mdc-fab__icon mdi mdi-magnify" />
        <span className="mdc-fab__label">Search</span>
      </button>
    </div>
  );
};

export default Search;
