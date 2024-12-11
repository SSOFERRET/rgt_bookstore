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