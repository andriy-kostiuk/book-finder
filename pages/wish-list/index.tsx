import { useEffect } from 'react';
import { initWishList } from '@/store/wish-list-slice/wish-list-slice';
import WishList from '@/components/blocks/wish-list/wish-list';
import { useAppDispatch } from '@/hooks/store-hooks';
import Head from 'next/head';

export default function Home() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initWishList());
  });

  return (
    <>
      <Head>
        <title>Список бажань</title>
      </Head>
      <WishList />
    </>
  );
}
