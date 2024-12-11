import BooksList from "@/components/books/books-list";
import PaginationBar from "@/components/pagination/pagination-bar";
import { getBooks } from "@/lib/books";
import styles from "./page.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home({ searchParams }: { searchParams: { page?: string } }) {
  if (!searchParams.page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1'); 
  }
  const page = parseInt(searchParams?.page || "1");
  const { data, total } = getBooks(page);

  return (
    <div>
      <header className={styles.header}>
        <PaginationBar total={total} />
        <Link className={styles.postButton} href='/book/post'>책 추가</Link>
      </header>
      <main>
        <BooksList books={data} />
      </main>
      <footer>
        <PaginationBar total={total} />
      </footer>
      <button>책 추가</button>
    </div>
  );
}
