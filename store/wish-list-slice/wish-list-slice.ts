import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookApi } from '@/interfaces/book-api';

interface IWishList {
  wishList: BookApi[];
}

const initialState: IWishList = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addWishListItem: (state, action: PayloadAction<BookApi>) => {
      state.wishList.push(action.payload);
      if (window) {
        localStorage.setItem('wishList', JSON.stringify(state.wishList));
      }
    },
    removeWishListItem: (state, action: PayloadAction<string>) => {
      state.wishList = [...state.wishList.filter((book) => book.id !== action.payload)];
      if (window) {
        localStorage.setItem('wishList', JSON.stringify(state.wishList));
      }
    },
    initWishList: (state) => {
      if (window) {
        const wishList = localStorage.getItem('wishList');
        if (wishList) state.wishList = JSON.parse(wishList);
      }
    },
  },
});

export const {addWishListItem, removeWishListItem, initWishList} = wishListSlice.actions;
export default wishListSlice.reducer;
