import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  const searchText = 'Type here to earch';
  return <input
    className="form-control search-input"
    placeholder={searchText}/>
};

export default SearchPanel;