import React, { FC } from 'react';
import BookCard from '@/components/ui/book-card/book-card';
import { BookApi } from '@/interfaces/book-api';
import { BooksListItem, StyledBooksList } from '@/components/layouts/books-list/styled';

interface Props {
  books: BookApi[];
}

const BooksList: FC<Props> = ({books}) => {
  return (
    <StyledBooksList>
      {books.map((book) => <BooksListItem key={book.id}><BookCard {...book} /></BooksListItem>)}
    </StyledBooksList>
  );
};

export default BooksList;
