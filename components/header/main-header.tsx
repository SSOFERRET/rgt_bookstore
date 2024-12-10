import Link from "next/link";
import styles from "./main-header.module.css";
import SearchBar from "./search-bar";

export default function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <Link className={styles.logo} href='/'>📚RGT BOOK</Link>
      <SearchBar />
    </div>
  );
}
