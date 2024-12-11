const sql = require('better-sqlite3');

import { IBook } from "./types/book.type";

const db = sql(`books.db`);

const dummyBooks: Omit<IBook, 'id'>[] = [
   {
      title: '고작 다섯 명이 한 말을 어떻게 믿어요?',
      image: '/images/image_1.jpg',
      author: '송라영',
      publicationDate: '2024-12-13',
      page: 272,
      isbn: '9791169213233',
      description: `
         고작 다섯 명이 한 말, 모두를 설득하는 강력한 무기가 되다!
         ...
      `,
      publisher: '한빛미디어',
      currentStock: 10,
      totalSales: 1,
      price: 23000,
   }
];

export function initializeDatabase() {
   try {
      db.prepare(`
         CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            image TEXT NOT NULL,
            author TEXT NOT NULL,
            publicationDate TEXT NOT NULL,
            page INTEGER,
            isbn TEXT NOT NULL,
            description TEXT NOT NULL,
            publisher TEXT NOT NULL,
            currentStock INTEGER NOT NULL,
            totalSales INTEGER NOT NULL DEFAULT 0,
            price INTEGER NOT NULL
         )
      `).run();

      initData();
   } catch (error) {
      console.error('Error creating books db:', error);
   }
}

async function initData() {
   console.log("initData 하는 중")
   const stmt = db.prepare(`
      INSERT INTO books (
         title,
         image,
         author,
         publicationDate,
         page,
         isbn,
         description,
         publisher,
         currentStock,
         totalSales,
         price
      ) VALUES (
         @title,
         @image,
         @author,
         @publicationDate,
         @page,
         @isbn,
         @description,
         @publisher,
         @currentStock,
         @totalSales,
         @price
      )
   `);

   for (const book of dummyBooks) {
      const result = stmt.run(book);
      console.log(`Inserted book with title: ${book.title}, ID: ${result.lastInsertRowid}`);
   }
}