import React from 'react';
import { BookApi } from '@/interfaces/book-api';
import { BookDescription, BookLink, Header, Img } from '@/components/ui/book-card/styled';
import defaultImage from '@/public/default-book-thumbnail.png';
import BookInformation from '@/components/ui/book-information/book-information';
import WishListBtn from '@/components/ui/wish-list-btn/wish-list-bth';


const BookCard = (book: BookApi) => {
  const bookImage = book.volumeInfo.imageLinks?.thumbnail || defaultImage.src;
  return (
    <>
      <Header>
        <BookLink href={`/book/${book.id}`}>{book.volumeInfo.title}</BookLink>
        <WishListBtn book={book} />
      </Header>
      <BookDescription>
        <Img src={bookImage} alt={book.volumeInfo.title} width={130} height={210} />
        <div>
          <BookInformation {...book.volumeInfo} />
        </div>
      </BookDescription>
    </>
  );
};

export default BookCard;
