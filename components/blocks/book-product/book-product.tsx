import React, { FC } from 'react';
import BookInformation from '@/components/ui/book-information/book-information';
import { BookApi } from '@/interfaces/book-api';
import {
  DescriptionContainer, Header,
  Image,
  InformationContainer,
  Section, ShortDesk,
  Title,
} from '@/components/blocks/book-product/styled';
import defaultBook from '@/public/default-book-large.jpg';
import BookPrice from '@/components/ui/book-price/book-price';
import WishListBtn from '@/components/ui/wish-list-btn/wish-list-btn';

interface Props {
  book: BookApi;
}

const BookProduct: FC<Props> = ({book}) => {
  const {volumeInfo, saleInfo} = book;
  const image = volumeInfo.imageLinks?.large || defaultBook;
  const description = volumeInfo.description?.replace(/<\/?\w+>/g, '');
  return (
    <Section>
      <Header>
        <Title>{volumeInfo.title}</Title>
        <WishListBtn book={book} />
      </Header>
      <DescriptionContainer>
        <Image src={image} width={300} height={450}
               alt={volumeInfo.title || ''} priority={true} />
        <InformationContainer>
          <div>
            <BookInformation {...volumeInfo} />
            {volumeInfo.description &&
              <ShortDesk><b>Короткий опис: </b>{description}</ShortDesk>}
          </div>
          <BookPrice saleInfo={saleInfo} title={volumeInfo.title} />
        </InformationContainer>
      </DescriptionContainer>
    </Section>
  );
};

export default BookProduct;
