import { IBook } from "./types/book.type";

const sql = require('better-sqlite3');
const db = sql('books.db');

const dummyBooks: IBook[] = [
   {
      id: 1,
      title: '고작 다섯 명이 한 말을 어떻게 믿어요?',
      image: '/images/image_1.jpg',
      author: '송라영',
      publicationDate: '2024-12-13',
      page: 272,
      isbn: '9791169213233',
      description: `
         고작 다섯 명이 한 말, 모두를 설득하는 강력한 무기가 되다!
         "정성 연구에 신뢰를 더하는 실전 UX 리서치 전략”

         이 책은 사용자 경험의 숨겨진 목소리를 찾고 이를 날카로운 인사이트로 전환하는 ‘정성 연구’ 실무 가이드다. 설문 조사, 사용성 테스트, 심층 인터뷰 등 다양한 정성 연구 방법론부터 설득력 있는 보고 방법까지 정성 연구의 전 과정을 체계적으로 다룬다. 또한 메타와 페이팔 등 글로벌 테크 기업의 생생한 실사례를 바탕으로, 소수의 참여자만으로도 깊이 있는 결과를 도출하는 비결과 연구 데이터를 효과적으로 전달해 이해관계자의 신뢰를 얻는 전략을 구체적으로 제시한다. UX 리서처, 디자이너, 프로덕트 매니저는 물론, 사용자 경험의 진정한 의미를 탐구하고자 하는 이들에게 실질적인 가이드를 제공할 것이다. 이 책으로 정성 연구의 진정한 힘을 경험하고 제품 개발에 차별화를 더할 새로운 가능성을 발견하길 바란다.
      `,
      publisher: '한빛미디어',
      currentStock: 10,
      totalSales: 1,
      price: 23000,
   }
];

async function initData() {
   const stmt = db.prepare(`
      INSERT INTO books VALUES (
         @id,
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
      stmt.run(book);
   }
}

initData();
