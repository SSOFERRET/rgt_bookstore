'use client';

import { useState, useEffect } from "react";
import styles from "./search-bar.module.css";
import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  const [search, setSearch] = useState<string>(""); 
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    if (debouncedSearch.trim()) {
      console.log(`Searching for: ${debouncedSearch}`);
    } else {
      console.log("Please enter a search term.");
    }
  };

  return (
    <div className={styles.searchBar}>
      <input 
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChange}
        className={styles.input}
      />
      <MdSearch className={styles.button} onClick={onSearch}/>
    </div>
  );
}
