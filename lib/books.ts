import { initializeDatabase } from "@/initdb";
import { IBook, ISaveBook } from "@/types/book.type";
import sql from 'better-sqlite3';
import xss from "xss";
import fs from 'node:fs';

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

export function getBook(id: number): IBook {
  return db.prepare('SELECT * FROM books WHERE id = ?').get(id) as IBook;
}

export async function saveBook(book: ISaveBook) {
  book.description = xss(book.description);

  const extension = book.image.name.split('.').pop();
  const fileName = `image_${Date.now()}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await book.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed.');
    }
  });

  const newBook: IBook = {
    ...book,
    image: `/images/${fileName}`
  };

  const result = db.prepare(`
    INSERT INTO books 
      (
        title,
        image,
        author,
        publicationDate,
        page,
        isbn,
        description,
        publisher,
        currentStock,
        price
      ) VALUES 
      (
        @title,
        @image,
        @author,
        @publicationDate,
        @page,
        @isbn,
        @description,
        @publisher,
        @currentStock,
        @price
      )
  `).run(newBook);

  return result.lastInsertRowid;
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

