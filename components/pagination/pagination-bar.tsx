'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './pagination-bar.module.css'; 
import { PAGE_LIMIT } from "@/types/book.type";

export default function PaginationBar({ total }: { total: number; }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(total / PAGE_LIMIT);
  const pageArr = Array(totalPages).fill(0).map((_, idx) => idx + 1);

  const handlePageClick = (page: number) => {
    if (searchParams.get('page') === `${page}`) {
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString()); 
    router.push(`?${params.toString()}`);
  };

  return (
    <ul className={styles.container}>
      {pageArr.map((page) => (
        <li
          key={page}
          className={(!searchParams.get('page') && page === 1) ? styles.selectedNum : searchParams.get('page') === `${page}` ? styles.selectedNum : styles.pageNum}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
}
