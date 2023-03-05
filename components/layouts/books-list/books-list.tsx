import React, { FC } from 'react';
import BookCard from '@/components/ui/book-card/book-card';
import { BookApi } from '@/interfaces/book-api';
import { BooksListItem, StyledBooksList } from '@/components/layouts/books-list/styled';

interface Props {
  books: BookApi[];
  lastElementRef?: any;
}

const BooksList: FC<Props> = ({books, lastElementRef}) => {
  return (
    <StyledBooksList>
      {books.map((book, index, arr) => {
        if (lastElementRef && index === arr.length - 1) {
          return (<BooksListItem ref={lastElementRef} key={book.id}><BookCard {...book} /></BooksListItem>);
        }
        return (<BooksListItem key={book.id}><BookCard {...book} /></BooksListItem>);
      })}
    </StyledBooksList>
  );
};

export default BooksList;
