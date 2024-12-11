import BooksList from "@/components/books/books-list";
import Button from "@/components/common/button";
import PaginationBar from "@/components/pagination/pagination-bar";
import { searchBooks } from "@/lib/books";
import Link from "next/link";
import { redirect } from "next/navigation";
import styles from './../page.module.css';

export const dynamic = "force-dynamic";

export default function SearchPage({ searchParams }: { searchParams: { page?: string, query: string } }) {
  if (!searchParams.page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1'); 
  }
  const page = parseInt(searchParams?.page || "1");
  const { data, total } = searchBooks(page, searchParams.query);

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
