import React, { FC } from 'react';
import { Text } from '@/components/ui/book-information/styled';
import { BookVolumeInfo } from '@/interfaces/book-api';

interface Props extends BookVolumeInfo {
}

const BookInformation: FC<Props> = ({authors, categories, publisher, publishedDate, language , pageCount}) => {
  return (
    <>
      {authors && <Text><b>Автор:</b> {authors.join(', ')}</Text>}
      {categories && <Text><b>Категорія:</b> {categories.join(', ')}</Text>}
      {publisher && <Text><b>Видавець:</b> {publisher}</Text>}
      {publishedDate &&
        <Text><b>Рік публікації:</b> {publishedDate.slice(0, 4)}</Text>}
      {language && <Text><b>Мова:</b> {language}</Text>}
      {!!pageCount && <Text><b>Кількість сторінок:</b> {pageCount}</Text>}
    </>
  );
};

export default BookInformation;
