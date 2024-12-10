import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        검색바
        책 추가 버튼
      </header>
      <main>
        책 그리드
      </main>
      <footer>
        페이지네이션
      </footer>
    </div>
  );
}
