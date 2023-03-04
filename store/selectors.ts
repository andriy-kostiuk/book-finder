import { RootState } from '@/store/store';

export const selectSearch = (store: RootState) => store.search;
export const selectWishList = (store: RootState) => store.wishList;
