import React, { FC } from 'react';
import { selectSearch } from '@/store/selectors';
import { Title, Section } from '@/components/blocks/search-results/styled';
import BooksList from '@/components/layouts/books-list/books-list';
import { useAppSelector } from '@/hooks/store-hooks';


const SearchResults: FC = () => {
  const {foundBooks} = useAppSelector(selectSearch);
  return (
    <Section>
      <Title>Результати пошуку</Title>
      <BooksList books={foundBooks} />
    </Section>
  );
};

export default SearchResults;
