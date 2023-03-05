import React, { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { selectSearch } from '@/store/selectors';
import BooksList from '@/components/layouts/books-list/books-list';
import HiddenElement from '@/components/ui/hidden-element/hidden-element';
import { Section } from '@/components/blocks/search-results/styled';
import { fetchSimilarBooks } from '@/store/search-slice/search-slice';


const SearchResults: FC = () => {
  const dispatch = useAppDispatch();
  const {foundBooks} = useAppSelector(selectSearch);
  const maxResults = 120;
  const {ref, inView} = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView && foundBooks.length < maxResults) {
      dispatch(fetchSimilarBooks());
    }
  }, [inView]);

  return (
    <Section>
      <HiddenElement as={'h2'}>Результати пошуку</HiddenElement>
      <BooksList books={foundBooks} lastElementRef={ref} />
    </Section>
  );
};

export default SearchResults;
