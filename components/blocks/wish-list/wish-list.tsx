import React, { FC } from 'react';
import BooksList from '@/components/layouts/books-list/books-list';
import { selectWishList } from '@/store/selectors';
import { Text, Title, TitleWrapper } from '@/components/blocks/wish-list/styled';
import SharedSvgIcons from '@/components/shared/shared-svg-icons/shared-svg-icons';
import { useAppSelector } from '@/hooks/store-hooks';

const WishList: FC = () => {
  const {wishList} = useAppSelector(selectWishList);
  return (
    <section>
      <TitleWrapper>
        <Title>Список бажань</Title>
        <SharedSvgIcons width={150} height={150} id={'wishList'} />
        {!wishList.length && <Text>Ваш список бажань порожній, скористайтеся пошуком</Text>}
      </TitleWrapper>
      <BooksList books={wishList} />
    </section>
  );
};

export default WishList;
