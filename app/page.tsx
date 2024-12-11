import Image from "next/image";
import styles from "./page.module.css";
import BooksGrid from "@/components/books/books-grid";
import { getBooks } from "@/lib/books";

function Books() {
  const books = getBooks();
  console.log(books);

  return <BooksGrid books={books} />
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Books />
      </main>
      <footer>
        페이지네이션
        책 추가 버튼
      </footer>
    </div>
  );
}
