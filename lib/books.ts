import { initializeDatabase } from "@/initdb";
import { IBook } from "@/types/book.type";
import sql from 'better-sqlite3';
const db = sql(`books.db`);

export function getBooks(page: number = 1, limit: number = 10): { data: IBook[], total: number } {
  const offset = (page - 1) * limit;

  try {
    const data = db.prepare('SELECT * FROM books LIMIT ? OFFSET ?').all(limit, offset) as IBook[];

    const result = db.prepare('SELECT COUNT(*) AS count FROM books').get() as { count: number };
    const total = result.count;

    return { data, total };
  } catch (error) {
    initializeDatabase();
    const result = db.prepare('SELECT COUNT(*) AS count FROM books').get() as { count: number };
    const total = result.count;

    const data = db.prepare('SELECT * FROM books LIMIT ? OFFSET ?').all(limit, offset) as IBook[];
    return { data, total };
  }
}
