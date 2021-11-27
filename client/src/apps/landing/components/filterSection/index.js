import React from 'react';
import './style/index.css';
import SearchInput from 'react-search-input';

/**
 *
 * @function filterSelection
 * @export
 * @param {*} props
 * @returns it will return searchInput box
 */
export default function filterSelection(props) {
  const { onSearchChange, searchPlaceHolder } = props;
  return (
    <div className="filter-section">
      <SearchInput placeholder={searchPlaceHolder} className="search-box" onChange={onSearchChange} />
    </div>
  );
}
