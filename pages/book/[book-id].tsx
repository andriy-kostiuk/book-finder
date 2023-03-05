import { GetServerSideProps } from 'next';
import { BookApi } from '@/interfaces/book-api';
import booksApi from '@/axios/books-api';
import React from 'react';
import BookProduct from '@/components/blocks/book-product/book-product';

interface BookPageProps {
  book: BookApi;
}

export default function BookPage({book}: BookPageProps) {
  return (
    <>
      <BookProduct book={book} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BookPageProps> = async ({query}) => {
  const bookId = query['book-id'] as string;
  const res = await booksApi.get(`/${bookId}?`);
  return {
    props: {book: res.data},
  };
};
