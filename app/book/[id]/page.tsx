import styles from "./page.module.css";

export default function Detail({ params }) {
  return (
    <div>
      <header>
        <section className={styles.image}>
          <p>책 이미지</p>
        </section>
        <section className={styles.info}>
          <h1>책 제목</h1>
          <p>저자</p>
          <p>출판사</p>
          <p>출간일</p>
          <p>판매 총 수량</p>
          <section className={styles.sellInput}>
            <div className={styles.sellCounts}>
              <button>-</button>
              <input 
                type="number"
                value={1}
              />
              <button>+</button>
            </div>
            <button>판매</button>
          </section>
          <section className={styles.buttons}>
            <button>책 정보 수정</button>
            <button>책 정보 삭제</button>
          </section>
        </section>
      </header>
      <main>
        <p>책 정보</p>
        <p>isbn</p>
        <p>발행일</p>
        <p>크기</p>
        <p>쪽수</p>
      </main>
    </div>
  );
}
