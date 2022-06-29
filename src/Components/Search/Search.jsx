import { useState } from 'react';

import styles from './Search.module.scss';
import { FiSearch } from 'react-icons/fi';

const Search = ({ cities }) => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="text" className={styles['search-term']} placeholder="Search" />
        <button type="submit" className={styles['search-button']}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
