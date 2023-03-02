import { GetServerSideProps } from 'next';
import { BookApi } from '@/interfaces/book-api';

interface BookPageProps extends BookApi {
}

export default function BookPage() {
  return (
    <>
      <h1>BookId</h1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const bookId = query['book-id'] as String;
  console.log(bookId);
  return {
    props: {},
  };
};
