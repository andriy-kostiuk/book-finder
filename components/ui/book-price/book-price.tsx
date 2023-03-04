import React, { FC } from 'react';
import { BookSaleInfo } from '@/interfaces/book-api';
import { Link } from '@/components/ui/book-price/styled';

interface Props {
  saleInfo: BookSaleInfo;
  title: string;
}

const BookPrice: FC<Props> = ({saleInfo, title}) => {
  if (!saleInfo.retailPrice) {
    return (
      <Link href={`https://www.amazon.com.br/s?k=${title}`} $type={'amazon'}>
        Перейти на Amazon
      </Link>
    );
  }

  const currency = saleInfo.retailPrice.currencyCode === 'UAH' ? 'грн' : saleInfo.retailPrice.currencyCode;
  return (<Link href={saleInfo.buyLink} $type={'googlePlay'}>
    {`Купити на Google Play: ${saleInfo.retailPrice.amount} ${currency}`}
  </Link>);
};

export default BookPrice;
