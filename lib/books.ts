import { initializeDatabase } from "@/initdb";
import { IBook } from "@/types/book.type";
import sql from 'better-sqlite3';
const db = sql(`books.db`);

export function getBooks(): IBook[] {
  try {
    return db.prepare('SELECT * FROM books').all() as IBook[];
  } catch {
    initializeDatabase();
    return db.prepare('SELECT * FROM books').all() as IBook[];
  }
}