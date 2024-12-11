import styles from "./header-info.module.css";
import { formatNumber } from "@/util/format-number";
import { IBook } from "@/types/book.type";

export default function HeaderInfo({ book }: { book: IBook }) {
  
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <h1>{book.title}</h1>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>저자</p>
          <p className={styles.value}>{book.author}</p>
        </section>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>출판사</p>
          <p className={styles.value}>{book.publisher}</p>
        </section>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>발행일</p>
          <p className={styles.value}>{book.publicationDate}</p>
        </section>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>판매량</p>
          <p className={styles.value}>{formatNumber(book.totalSales)} 권</p>
        </section>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>재고</p>
          <p className={styles.value}>{formatNumber(book.currentStock)} 권</p>
        </section>
        <section className={styles.infoSection}>
          <p className={styles.keyName}>가격</p>
          <p className={styles.value}>{formatNumber(book.price)} 원</p>
        </section>
      </section>
    </div>
  );
}
