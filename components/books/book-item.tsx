import Link from 'next/link';
import Image from 'next/image';

import styles from './book-item.module.css';
import { IBook } from "@/types/book.type";

export default function BookItem({
  id,
  title,
  image,
  author,
  publicationDate,
  publisher,
  currentStock,
  totalSales,
  price,
}: IBook) {
  return (
    <div className={styles.bookItem}>
        <Link 
          className={styles.image}
          href={`/book/${id}`}
        >
          <Image src={image} alt={title} fill />
        </Link>
        <Link 
          className={styles.container}
          href={`/book/${id}`}
        >
          <h1>{title}</h1>
          <div className={styles.info}>
            <section className={styles.infoSection}>
              <p className={styles.keyName}>저자</p>
              <p className={styles.value}>{author}</p>
            </section>
            <section className={styles.infoSection}>
              <p className={styles.keyName}>출판사</p>
              <p className={styles.value}>{publisher}</p>
            </section>
            <section className={styles.infoSection}>
              <p className={styles.keyName}>출판일</p>
              <p className={styles.value}>{publicationDate}</p>
            </section>
          </div>
          <div className={styles.info}>
            <section className={styles.infoSection}>
              <p className={styles.keyName}>가격</p>
              <p className={styles.value}>{price} 원</p>
            </section>
            <section className={styles.infoSection}>
              <p className={styles.keyName}>판매</p>
              <p className={styles.value}>{totalSales} 권</p>
            </section>
            <section className={styles.infoSection}>
              <p className={styles.keyName}>재고수</p>
              <p className={styles.value}>{currentStock} 권</p>
            </section>
          </div>
        </Link>
    </div>
  );
}