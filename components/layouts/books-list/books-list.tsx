import React, { FC } from 'react';
import BookCard from '@/components/ui/book-card/book-card';
import { BookApi } from '@/interfaces/book-api';
import { BooksListItem, StyledBooksList } from '@/components/layouts/books-list/styled';
import { AnimatePresence } from 'framer-motion';

interface Props {
  books: BookApi[];
  lastElementRef?: (node?: Element | null) => void;
}

const BooksList: FC<Props> = ({books, lastElementRef}) => {
  return (
    <StyledBooksList>
      <AnimatePresence initial={false}>
        {books.map((book, index, arr) => {
          if (lastElementRef && index === arr.length - 1) {
            return (<BooksListItem viewport={{once: true}}
                                   initial={{opacity: 0, height: 0}}
                                   animate={{opacity: 1, height: 'auto'}}
                                   transition={{duration: 1}}
                                   key={book.id} ref={lastElementRef}
            ><BookCard {...book} /></BooksListItem>);
          }
          return (<BooksListItem viewport={{once: true}}
                                 initial={{opacity: 0, height: 0}}
                                 exit={{opacity: 0, height: 0}}
                                 animate={{opacity: 1, height: 'auto'}}
                                 transition={{duration: 1}}
                                 key={book.id}><BookCard {...book} /></BooksListItem>);
        })}
      </AnimatePresence>
    </StyledBooksList>
  );
};

export default BooksList;
