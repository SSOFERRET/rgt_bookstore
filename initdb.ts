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
   },
   {
      title: '자바스크립트로 배우는 알고리즘',
      image: '/images/image_1.jpg',
      author: '김영한',
      publicationDate: '2023-11-11',
      page: 350,
      isbn: '9788932923231',
      description: `
         자바스크립트를 통해 컴퓨터 과학과 알고리즘을 쉽고 재미있게 배운다!
         ...
      `,
      publisher: '위키북스',
      currentStock: 20,
      totalSales: 5,
      price: 28000,
   },
   {
      title: '리액트를 제대로 배우는 법',
      image: '/images/image_1.jpg',
      author: '박민수',
      publicationDate: '2023-08-20',
      page: 400,
      isbn: '9791169213240',
      description: `
         리액트를 처음부터 끝까지 다룬 실무 중심의 가이드북.
         ...
      `,
      publisher: '길벗',
      currentStock: 15,
      totalSales: 8,
      price: 32000,
   },
   {
      title: 'UX 디자인의 새로운 지평',
      image: '/images/image_1.jpg',
      author: '이수현',
      publicationDate: '2023-10-15',
      page: 250,
      isbn: '9791158390021',
      description: `
         사용자 경험 디자인의 최신 트렌드와 사례를 배울 수 있는 책.
         ...
      `,
      publisher: '인사이트',
      currentStock: 12,
      totalSales: 10,
      price: 27000,
   },
   {
      title: '파이썬으로 배우는 데이터 분석',
      image: '/images/image_1.jpg',
      author: '정준영',
      publicationDate: '2024-01-05',
      page: 500,
      isbn: '9791163032030',
      description: `
         데이터 분석 실무에서 활용할 수 있는 파이썬 활용법.
         ...
      `,
      publisher: '한빛아카데미',
      currentStock: 30,
      totalSales: 15,
      price: 35000,
   },
   {
      title: '마케팅을 위한 데이터 시각화',
      image: '/images/image_1.jpg',
      author: '윤정희',
      publicationDate: '2022-09-14',
      page: 200,
      isbn: '9788960882033',
      description: `
         데이터를 통해 마케팅 전략을 세우는 방법을 설명하는 책.
         ...
      `,
      publisher: '비즈니스북스',
      currentStock: 18,
      totalSales: 12,
      price: 25000,
   },
   {
      title: 'HTML과 CSS로 배우는 웹 디자인',
      image: '/images/image_1.jpg',
      author: '김수진',
      publicationDate: '2023-04-20',
      page: 350,
      isbn: '9791133293244',
      description: `
         웹 디자인 입문자를 위한 실전 가이드.
         ...
      `,
      publisher: '제이펍',
      currentStock: 22,
      totalSales: 7,
      price: 30000,
   },
   {
      title: 'AI의 시대, 인간의 길',
      image: '/images/image_1.jpg',
      author: '정해인',
      publicationDate: '2023-12-01',
      page: 290,
      isbn: '9791187519022',
      description: `
         AI 시대에서 인간의 가치를 어떻게 유지할 것인가에 대한 통찰.
         ...
      `,
      publisher: '청림출판',
      currentStock: 17,
      totalSales: 9,
      price: 32000,
   },
   {
      title: '도커와 쿠버네티스 실무',
      image: '/images/image_1.jpg',
      author: '최준호',
      publicationDate: '2024-02-28',
      page: 400,
      isbn: '9791188003025',
      description: `
         클라우드 환경에서의 도커와 쿠버네티스 활용법.
         ...
      `,
      publisher: '에이콘출판',
      currentStock: 25,
      totalSales: 18,
      price: 37000,
   },
   {
      title: '스프링 부트로 배우는 백엔드 개발',
      image: '/images/image_1.jpg',
      author: '이상현',
      publicationDate: '2023-03-10',
      page: 420,
      isbn: '9791160504501',
      description: `
         스프링 부트를 활용한 백엔드 개발의 모든 것.
         ...
      `,
      publisher: '한빛미디어',
      currentStock: 20,
      totalSales: 10,
      price: 34000,
   },
   {
      title: '빅데이터로 보는 세상',
      image: '/images/image_1.jpg',
      author: '이정민',
      publicationDate: '2023-07-15',
      page: 380,
      isbn: '9791158395031',
      description: `
         빅데이터 기술을 통해 세상의 트렌드를 분석하는 책.
         ...
      `,
      publisher: '인사이트',
      currentStock: 18,
      totalSales: 14,
      price: 29000,
   },
   {
      title: 'Node.js로 배우는 서버 개발',
      image: '/images/image_1.jpg',
      author: '김현수',
      publicationDate: '2023-05-22',
      page: 450,
      isbn: '9788932924219',
      description: `
         Node.js 기반 서버 개발 입문자를 위한 종합 가이드.
         ...
      `,
      publisher: '길벗',
      currentStock: 15,
      totalSales: 8,
      price: 32000,
   },
   {
      title: '프론트엔드 개발 실전 가이드',
      image: '/images/image_1.jpg',
      author: '최민정',
      publicationDate: '2023-06-01',
      page: 320,
      isbn: '9791187510025',
      description: `
         프론트엔드 개발에서 필수적으로 알아야 할 도구와 기술.
         ...
      `,
      publisher: '에이콘출판',
      currentStock: 25,
      totalSales: 20,
      price: 35000,
   },
   {
      title: '클라우드 컴퓨팅 입문',
      image: '/images/image_1.jpg',
      author: '윤하영',
      publicationDate: '2023-11-12',
      page: 300,
      isbn: '9788960885023',
      description: `
         클라우드 컴퓨팅의 기초부터 실무 활용법까지.
         ...
      `,
      publisher: '비즈니스북스',
      currentStock: 12,
      totalSales: 6,
      price: 26000,
   },
   {
      title: '코틀린으로 배우는 안드로이드 앱 개발',
      image: '/images/image_1.jpg',
      author: '장지훈',
      publicationDate: '2023-09-25',
      page: 480,
      isbn: '9791169215031',
      description: `
         안드로이드 앱 개발의 기초부터 고급 개념까지 코틀린으로 배우는 가이드.
         ...
      `,
      publisher: '한빛미디어',
      currentStock: 28,
      totalSales: 22,
      price: 38000,
   },
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