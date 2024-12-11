import BooksList from "@/components/books/books-list";
import PaginationBar from "@/components/pagination/pagination-bar";
import { searchBooks } from "@/lib/books";
import Link from "next/link";
import styles from './../page.module.css';

export const dynamic = "force-dynamic";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ page?: string, query: string }> }) {
  const resolvedSearchParams = await searchParams;
  
  const page = parseInt(resolvedSearchParams.page || "1");
  const { data, total } = searchBooks(resolvedSearchParams.query, page);

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
    </div>
  );
}
