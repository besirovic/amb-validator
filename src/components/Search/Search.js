import React from 'react';

import './search.css';

const Search = () => (
  <div className="search">
    <input
      className="search__input"
      type="text"
      autoComplete={false}
      placeholder="Search for asset..."
    />
    <button className="search__button mdc-fab mdc-fab--extended mdc-ripple-upgraded">
      <i className="mdc-fab__icon mdi mdi-magnify" />
      <span className="mdc-fab__label">Search</span>
    </button>
  </div>
);

export default Search;
