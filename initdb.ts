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
      `,
      publisher: '한빛미디어',
      currentStock: 10,
      totalSales: 1,
      price: 23000,
   },
   {
      title: '소문난 명강의_소플의 처음 만난 AWS',
      image: '/images/image_2.jpg',
      author: '이인제',
      publicationDate: '2024-11-12',
      page: 856,
      isbn: '9791169213042',
      description: `
         기초부터 차근차근, 따라 하며 익히는 AWS 서비스 가이드
      `,
      publisher: '한빛미디어',
      currentStock: 20,
      totalSales: 5,
      price: 48000,
   },
   {
      title: '실전 코드로 배우는 Vue.js',
      image: '/images/image_3.jpg',
      author: '정병열',
      publicationDate: '2024-10-10',
      page: 452,
      isbn: '9791169212991',
      description: `
         실무에 바로 적용 가능한 코드만 다루는 Vue 핵심 가이드
      `,
      publisher: '한빛미디어',
      currentStock: 15,
      totalSales: 8,
      price: 32000,
   },
   {
      title: '자바스크립트 + 리액트 디자인 패턴',
      image: '/images/image_4.jpg',
      author: '윤창식',
      publicationDate: '2024-08-01',
      page: 384,
      isbn: '9791169212571',
      description: `
         자바스크립트와 리액트의 최신 패턴과 렌더링, 성능 패턴까지
      `,
      publisher: '한빛미디어',
      currentStock: 12,
      totalSales: 10,
      price: 28000,
   },
   {
      title: '데이터로 말한다! CRM 마케팅',
      image: '/images/image_5.jpg',
      author: '이은영',
      publicationDate: '2024-06-21',
      page: 264,
      isbn: '9791169212601',
      description: `
         일회성 구매자를 충성 고객으로! 돈이 되는 고객 관리 실무 전략
      `,
      publisher: '한빛미디어',
      currentStock: 30,
      totalSales: 15,
      price: 23000,
   },
   {
      title: '업무에 활용하는 Node.js',
      image: '/images/image_6.jpg',
      author: '김모세',
      publicationDate: '2024-05-30',
      page: 412,
      isbn: '9791169212489',
      description: `
         웹 애플리케이션 개발로 배우는 Node.js 원리와 실무 가이드
      `,
      publisher: '한빛미디어',
      currentStock: 18,
      totalSales: 12,
      price: 30000,
   },
   {
      title: '실전 레디스',
      image: '/images/image_7.jpg',
      author: '서대원, 정경석',
      publicationDate: '2024-05-17',
      page: 704,
      isbn: '9791169212359',
      description: `
        기초, 실전, 고급 단계별로 배우는 레디스 핵심 가이드
      `,
      publisher: '한빛미디어',
      currentStock: 22,
      totalSales: 7,
      price: 45000,
   },
   {
      title: '만들면서 배우는 워드프레스(전면 개정판)',
      image: '/images/image_8.jpg',
      author: '박현우',
      publicationDate: '2024-03-05',
      page: 416,
      isbn: '9791169212076',
      description: `
         웹사이트 제작부터 AI 활용, 구글 애드센스로 수익 창출까지
      `,
      publisher: '한빛미디어',
      currentStock: 17,
      totalSales: 9,
      price: 29000,
   },
   {
      title: '프로덕트',
      image: '/images/image_9.jpg',
      author: '홍석희',
      publicationDate: '2023-11-27',
      page: 244,
      isbn: '9791169211734',
      description: `
         유저를 사로잡는 서비스 기획의 모든 것
      `,
      publisher: '한빛미디어',
      currentStock: 25,
      totalSales: 18,
      price: 22000,
   },
   {
      title: '사실은 이것도 디자인입니다',
      image: '/images/image_10.jpg',
      author: '김성연',
      publicationDate: '2023-07-24',
      page: 240,
      isbn: '9791169211307',
      description: `
         일상 속 숨겨진 디자인의 비밀
      `,
      publisher: '한빛미디어',
      currentStock: 20,
      totalSales: 10,
      price: 19000,
   },
   {
      title: '백엔드 개발을 위한 핸즈온 장고',
      image: '/images/image_11.jpg',
      author: '김성렬',
      publicationDate: '2023-05-30',
      page: 416,
      isbn: '9791169211116',
      description: `
         장고 모델링과 마이그레이션부터 쿼리셋, DRF까지
      `,
      publisher: '한빛미디어',
      currentStock: 18,
      totalSales: 14,
      price: 32000,
   },
   {
      title: 'UX/UI 디자이너를 위한 실무 피그마(개정판)',
      image: '/images/image_12.jpg',
      author: '클레어 정',
      publicationDate: '2022-11-01',
      page: 416,
      isbn: '9791169210461',
      description: `
         디자인 시스템에서 개발 전달까지
      `,
      publisher: '한빛미디어',
      currentStock: 15,
      totalSales: 8,
      price: 26000,
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