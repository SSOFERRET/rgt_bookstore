'use client';

import ImagePicker from "../image-picker/image-picker";
import styles from './form.module.css';
import Submit from "./submit";
import { submitBook } from "@/lib/actions";
import { useState, startTransition } from "react";

export default function Form() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // startTransition으로 비동기 액션 처리
    startTransition(async () => {
      const result = await submitBook(undefined, formData);
      setMessage(result?.message || '');
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <section className={styles.image}>
        <ImagePicker name="image" />
      </section>
      <p className={styles.row}>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p className={styles.row}>
        <label htmlFor="author">저자</label>
        <input type="text" id="author" name="author" required />
      </p>
      <p className={styles.row}>
        <label htmlFor="publisher">출판사</label>
        <input type="text" id="publisher" name="publisher" required />
      </p>
      <p className={styles.row}>
        <label htmlFor="publicationDate">발행일</label>
        <input type="text" id="publicationDate" name="publicationDate" placeholder="연월일을 8개 숫자로 작성 (예: 20240101)" required />
      </p>
      <p className={styles.row}>
        <label htmlFor="currentStock">재고</label>
        <input type="number" id="currentStock" name="currentStock" required />
      </p>
      <p className={styles.row}>
        <label htmlFor="price">가격</label>
        <input type="number" id="price" name="price" required />
      </p>
      <p className={styles.row}>
        <label htmlFor="page">쪽수</label>
        <input type="number" id="page" name="page" required />
      </p>
      <p className={styles.row}>
        <label htmlFor="isbn">isbn</label>
        <input type="text" id="isbn" name="isbn" required />
      </p>
      <p>
        <label htmlFor="description">책 정보</label>
        <textarea id="description" name="description" rows={10} required></textarea>
      </p>
      {message && <p>{message}</p>}
      <p className={styles.actions}>
        <Submit />
      </p>
    </form>
  );
}
