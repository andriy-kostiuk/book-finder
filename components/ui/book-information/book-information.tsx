import React, { FC } from 'react';
import { Text } from '@/components/ui/book-information/styled';
import { BookVolumeInfo } from '@/interfaces/book-api';

interface Props extends BookVolumeInfo {
}

const BookInformation: FC<Props> = (volumeInfo) => {
  return (
    <>
      <Text><b>Автор:</b> {volumeInfo.authors.join(', ')}</Text>
      {volumeInfo.categories && <Text><b>Категорія:</b> {volumeInfo.categories.join(', ')}</Text>}
      {volumeInfo.publisher && <Text><b>Видавець:</b> {volumeInfo.publisher}</Text>}
      {volumeInfo.publishedDate &&
        <Text><b>Рік публікації:</b> {volumeInfo.publishedDate.slice(0, 4)}</Text>}
      {volumeInfo.language && <Text><b>Мова:</b> {volumeInfo.language}</Text>}
      {!!volumeInfo.pageCount && <Text><b>Кількість сторінок:</b> {volumeInfo.pageCount}</Text>}
    </>
  );
};

export default BookInformation;
