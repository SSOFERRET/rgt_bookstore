'use client';

import { useState, useEffect } from "react";
import styles from "./search-bar.module.css";
import { MdSearch } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState<string>(""); 
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const router = useRouter();
  const params = useParams();
  const currentQuery = params?.query || "";

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
    console.log(currentQuery)
    if (debouncedSearch.trim() && debouncedSearch.trim() !== (currentQuery as string).trim()) {
      router.push(`/book/search?query=${debouncedSearch}`);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <input 
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={styles.input}
      />
      <MdSearch className={styles.button} onClick={onSearch} />
    </div>
  );
}
