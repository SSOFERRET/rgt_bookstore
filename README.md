# 구현 기능 리스트

### 공통 컴포넌트

- [x] 헤더
  - [x] 검색 바
 
### 페이지

- [x] Home (Get /books)
  관리자 페이지 홈
  - [x] 책 리스트 컴포넌트
  - [x] 책 개별 컴포넌트
  - [x] 페이지네이션
  - [x] 책 추가 버튼 (=> Create 페이지)
  - [ ] (옵션) 일괄처리 기능

- [x] Search (Get /search?q={search})
  검색 결과값 
  책 리스트 컴포넌트, 개별 컴포넌트, 페이지네이션, 책 추가 버튼 레이아웃은 Home 과 통일

- [x] Detail (GET /books/:id)
  책 상세 정보를 보여주는 페이지
  - [x] 페이지 컴포넌트
  - [x] 책 수정 (=> Modify 페이지)
  - [x] 책 삭제 (DELETE /books/:id)
  - [x] 책 재고 수량 수정 (PATCH /books/:id)

- [x] Create (POST /books)
  책 정보 추가 페이지
  - [x] 제출 폼 컴포넌트
    - [x] 이미지 제출 컴포넌트
  - [x] 예외 상황

- [ ] Modify (PUT /books/:id)
  책 정보 수정 페이지
  - [ ] Create와 공통 제출 폼 컴포넌트 사용하기

- [x] Not found 페이지
