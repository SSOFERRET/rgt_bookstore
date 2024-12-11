'use server';

import { redirect } from "next/navigation";
import { deleteBook, patchAddStock, patchStockAndTotalAsSales, saveBook, searchBooks } from "./books";
import { revalidatePath } from "next/cache";
import { formatDate } from "@/util/format-date";
import { ISaveBook } from "@/types/book.type";

function isInvalidText(text: unknown): boolean {
  return typeof text !== 'string' || text.trim() === '';
}

function isInvalidNumber(value: unknown): boolean {
  return typeof value !== 'number' || value <= 0 || isNaN(value);
}

function isInvalidDate(date: unknown): boolean {
  if (typeof date !== 'string' || date.trim() === '' || isNaN(parseInt(date))) {
    return false;
  }

  if (!/^\d{8}$/.test(date)) {
    return true;
  }

  const year = parseInt(date.slice(0, 4), 10);
  const month = parseInt(date.slice(4, 6), 10);
  const day = parseInt(date.slice(6, 8), 10);

  if (month < 1 || month > 12) {
    return true;
  }

  const daysInMonth = new Date(year, month, 0).getDate();

  if (day < 1 || day > daysInMonth) {
    return true;
  }

  return false;
}


export const submitBook = async (
  state: { message: string } | undefined,
  formData: FormData
) => {
  const book = {
    title: formData.get('title')?.toString() || '',
    author: formData.get('author')?.toString() || '',
    publisher: formData.get('publisher')?.toString() || '',
    image: formData.get('image') as File,
    publicationDate: formData.get('publicationDate')?.toString() || '',
    currentStock: parseInt(formData.get('currentStock')?.toString() || '0', 10),
    price: parseFloat(formData.get('price')?.toString() || '0'),
    page: parseInt(formData.get('page')?.toString() || '0', 10),
    isbn: formData.get('isbn')?.toString() || '',
    description: formData.get('description')?.toString() || '',
  };

  if (
    isInvalidText(book.title) ||
    isInvalidText(book.author) ||
    isInvalidText(book.publisher) ||
    isInvalidDate(book.publicationDate) ||
    isInvalidText(book.isbn) ||
    isInvalidText(book.description) ||
    isInvalidNumber(book.currentStock) ||
    isInvalidNumber(book.price) ||
    isInvalidNumber(book.page) ||
    !(book.image instanceof File) ||
    book.image.size === 0
  ) {
    return {
      message: '잘못된 입력입니다.',
    };
  }

  book.publicationDate = formatDate(book.publicationDate);

  const validBook = book as ISaveBook;

  let id: number | bigint = 0;

  try {
    id = await saveBook(validBook);
    revalidatePath('/');
  } catch (error) {
    console.error('Error saving book:', error);
    return {
      message: '책 저장 중 문제가 발생했습니다.',
    };
  } finally {
    if (!id)
      return redirect('/');
    return redirect(`/book/${id}`);
  }
};

export const patchBookAsSale = async (
  state: { message: string } | undefined,
  bookId: number,
  updates: { currentStock: number; totalSales: number }
) => {
  if (
    (updates.currentStock !== undefined && isInvalidNumber(updates.currentStock)) ||
    (updates.totalSales !== undefined && isInvalidNumber(updates.totalSales))
  ) {
    return {
      message: '잘못된 입력입니다.',
    };
  }

  try {
    patchStockAndTotalAsSales(bookId, updates);
    revalidatePath(`/book/${bookId}`);
    return {
      message: `책 정보가 성공적으로 업데이트되었습니다.`
    };
  } catch (error) {
    console.error('Error updating book:', error);
    return {
      message: '책 정보 업데이트 중 문제가 발생했습니다.',
    };
  }
};

export const patchBookAsAddStock = async (
  state: { message: string } | undefined,
  bookId: number,
  updates: { currentStock: number; }
) => {
  if (updates.currentStock !== undefined && isInvalidNumber(updates.currentStock)) {
    return {
      message: '잘못된 입력입니다.',
    };
  }

  try {
    patchAddStock(bookId, updates);
    revalidatePath(`/book/${bookId}`);
    return {
      message: `책 재고 수량이 성공적으로 업데이트 되었습니다.`
    };
  } catch (error) {
    console.error('Error updating book:', error);
    return {
      message: '책 정보 업데이트 중 문제가 발생했습니다.',
    };
  }
};

export const deleteBookWithId = async (
  state: { message: string } | undefined,
  id: number,
) => {

  try {
    deleteBook(id);
    revalidatePath(`/`);
    return {
      message: `책이 성공적으로 삭제되었습니다..`
    };
  } catch (error) {
    console.error('Error updating book:', error);
    return {
      message: '책 삭제 중 문제가 발생했습니다.',
    };
  }
};