'use client';

import styles from "./header-buttons.module.css";
import Button from "@/components/common/button";
import Link from "next/link";

export default function HeaderButtons({ id }: {id: number}) {

  return (
    <div>
      <section className={styles.sell}>
        <div className={styles.sellControl}>
          <button className={styles.sellMinus}>-</button>
          <input 
            type="number"
            value={1}
            className={styles.sellInput}
          />
          <button className={styles.sellPlus}>+</button>
        </div>
        <Button>판매</Button>
      </section>
      <section className={styles.buttons}>
        <Link className={styles.modifyButton} href={`/book/${id}/modify`}>책 정보 수정</Link>
        <Button onClick={() => {}}>책 정보 삭제</Button>
      </section>
    </div>
  );
}
