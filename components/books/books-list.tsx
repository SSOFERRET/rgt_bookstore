import { IBook } from "@/types/book.type";
import styles from "./books-list.module.css";
import BookItem from "./book-item";

interface IProps {
  books: IBook[];
}

export default function BooksList({books}: IProps) {
  return (
    <ul className={styles.books}>
      {books.map(book => <li key={book.id}>
        <BookItem {...book} />
      </li>)}
    </ul>
  )
}