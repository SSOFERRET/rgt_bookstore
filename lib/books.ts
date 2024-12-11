import { initializeDatabase } from "@/initdb";
import { IBook } from "@/types/book.type";
import sql from 'better-sqlite3';
const db = sql(`books.db`);

export function getBooks(page: number = 1, limit: number = 10): { data: IBook[]; total: number } {
  const offset = (page - 1) * limit;

  const data = executeWithRetry(() =>
    db.prepare("SELECT * FROM books LIMIT ? OFFSET ?").all(limit, offset) as IBook[]
  );

  const total = executeWithRetry(() => {
    const result = db.prepare("SELECT COUNT(*) AS count FROM books").get() as { count: number };
    return result.count;
  });

  return { data, total };
}

function executeWithRetry<T>(task: () => T): T {
  try {
    return task();
  } catch (error) {
    console.error("Error occurred, reinitializing database:", error);
    initializeDatabase();
    return task();
  }
}
