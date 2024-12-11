import Image from "next/image";
import styles from "./page.module.css";
import { getBook } from "@/lib/books";
import { formatNumber } from "@/util/format-number";
import HeaderInfo from "@/components/book/header-info";
import HeaderButtons from "@/components/book/header-buttons";
import { notFound } from "next/navigation";

export default function Detail({ params }: { params: { id: string } }) {
  const book = getBook(parseInt(params.id));

  if (!book) {
    notFound();
  }
  
  return (
    <div>
      <header className={styles.header}>
        <section className={styles.image}>
          <Image src={book.image} alt={book.title} fill />
        </section>
        <section className={styles.container}>
          <HeaderInfo book={book} />
          <HeaderButtons id={book.id} currentStock={book.currentStock} totalSales={book.totalSales}/>
        </section>
      </header>
      <main className={styles.main}>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>책 정보</p>
          <p className={styles.description}>{book.description}</p>
        </section>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>isbn</p>
          <p className={styles.value}>{book.isbn}</p>
        </section>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>쪽수</p>
          <p className={styles.value}>{book.page ? `${formatNumber(book.page)} p` : '-'}</p>
        </section>
      </main>
    </div>
  );
}
