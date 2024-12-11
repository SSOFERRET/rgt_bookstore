import styles from "./page.module.css";
import BooksList from "@/components/books/books-list";
import PaginationBar from "@/components/pagination/pagination-bar";
import { getBooks } from "@/lib/books";

export const dynamic = "force-dynamic";

export default function Home({ searchParams }: { searchParams: { page?: string } }) {
  if (!searchParams.page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1'); 
  }
  const page = parseInt(searchParams?.page || "1");
  const { data, total } = getBooks(page);

  return (
    <div className={styles.page}>
      <header>
        <PaginationBar total={total} />
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
