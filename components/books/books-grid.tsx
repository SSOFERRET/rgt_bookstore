import { IBook } from "@/types/book.type";
import styles from "./books-grid.module.css";
import BookItem from "./book-item";

interface IProps {
  books: IBook[];
}

export default function BooksGrid({books}: IProps) {
  return (
    <ul className={styles.books}>
      {books.map(book => <li key={book.id}>
        <BookItem {...book} />
      </li>)}
    </ul>
  )
}