export interface IBook {
  id: number;
  title: string;
  image: string;
  author: string;
  publicationDate: string;
  isbn: string;
  description: string;
  publisher: string;
  currentStock: number;
  totalSales: number;
  price: number;
  page?: number;
}

export interface ISaveBook {
  id: number;
  title: string;
  image: File;
  author: string;
  publicationDate: string;
  isbn: string;
  description: string;
  publisher: string;
  currentStock: number;
  totalSales: number;
  price: number;
  page?: number;
}

export const PAGE_LIMIT = 10;