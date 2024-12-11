'use client';

import Button from "@/components/common/button";
import { useRouter } from 'next/navigation';
import styles from "./not-found.module.css"

export default function NotFound() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>책을 찾을 수 없습니다</h1>
      <p>요청하신 책 정보를 찾을 수 없습니다.</p>
      <Button
        className="back-button" 
        onClick={() => router.back()}
      >
        {'<  뒤로가기'}
      </Button>
    </main>
  );
}
