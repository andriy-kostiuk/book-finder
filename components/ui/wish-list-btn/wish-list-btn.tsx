import React, { FC, useState } from 'react';
import SharedSvgIcons from '@/components/shared/shared-svg-icons/shared-svg-icons';
import { Button } from '@/components/ui/wish-list-btn/styled';
import { BookApi } from '@/interfaces/book-api';
import { selectWishList } from '@/store/selectors';
import { addWishListItem, removeWishListItem } from '@/store/wish-list-slice/wish-list-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';

interface Props {
  book: BookApi;
  marginBottom?: number;
}

const WishListBtn: FC<Props> = ({book, marginBottom}) => {
  const {wishList} = useAppSelector(selectWishList);
  const initialAvailability = !!wishList.length && !!wishList.find((obj) => obj.id === book.id);
  const [availability, setAvailability] = useState<boolean>(initialAvailability);
  const dispatch = useAppDispatch();

  const addWishListHandler = () => {
    dispatch(addWishListItem(book));
    setAvailability(true);
  };
  const removeWishListHandler = () => {
    dispatch(removeWishListItem(book.id));
    setAvailability(false);
  };

  if (availability) {
    return (
      <Button onClick={removeWishListHandler} $availability={availability} $marginBottom={marginBottom}>
        <SharedSvgIcons width={15} height={15} id={'heart'} />
        <p>Прибрати зі списку бажань</p>
      </Button>
    );
  }
  return (
    <Button onClick={addWishListHandler} $availability={availability} $marginBottom={marginBottom}>
      <SharedSvgIcons width={15} height={15} id={'heart'} />
      <p>Додати до списку бажань</p>
    </Button>
  );
};

export default WishListBtn;
