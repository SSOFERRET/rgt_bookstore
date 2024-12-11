# 프로젝트 설명

이 프로젝트는 Next.js를 기반으로 한 풀스택 애플리케이션으로, 사용자가 책 데이터를 관리할 수 있는 간단한 도구입니다.

## 기술 스택
- **DB**: better-sqlite3
  better-sqlite3는 빠르고 간단한 SQL 데이터베이스로, 서버 사이드 렌더링 환경에 적합합니다.
- **BE**: Next.js
  - `/lib/books`: 데이터베이스 관리
  - `/lib/actions`: 프론트엔드와의 통신 함수
- **FE**: Next.js (App Router 기반)

# 구현 기능 리스트

### 공통 컴포넌트

- [x] 헤더
  - [x] 검색 바
 
### 페이지

- [x] Home (Get /book)
  관리자 페이지 홈
  - [x] 책 리스트 컴포넌트
  - [x] 책 개별 컴포넌트
  - [x] 페이지네이션
  - [x] 책 추가 버튼 (=> Create 페이지)
  - [ ] (옵션) 일괄처리 기능

- [x] Search (Get /book/search?q={search})
  검색 결과값 
  책 리스트 컴포넌트, 개별 컴포넌트, 페이지네이션, 책 추가 버튼 레이아웃은 Home 과 통일

- [x] Detail (GET /book/:id)
  책 상세 정보를 보여주는 페이지
  - [x] 페이지 컴포넌트
  - [x] 책 수정 (=> Modify 페이지)
  - [x] 책 삭제 (DELETE)
  - [x] 책 재고 수량 수정 (PATCH)

- [x] Create (POST /book/post)
  책 정보 추가 페이지
  - [x] 제출 폼 컴포넌트
    - [x] 이미지 제출 컴포넌트
  - [x] 예외 상황

- [ ] Modify (PUT /book/:id/modify)
  책 정보 수정 페이지
  - [ ] Create와 공통 제출 폼 컴포넌트 사용하기

- [x] Not found 페이지
