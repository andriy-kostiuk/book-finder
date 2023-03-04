import booksApi from '@/axios/books-api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BookApi, BookRequest } from '@/interfaces/book-api';

interface ISearch {
  foundBooks: BookApi[];
  totalBooks: number,
  status: 'loading' | 'loaded' | 'error';
}

const initialState: ISearch = {
  foundBooks: [],
  totalBooks: 0,
  status: 'loaded',
};


export const fetchSimilarBooks = createAsyncThunk<BookRequest, string>(
  'search/fetchSimilarBooks',
  async (id) => {
    const res = await booksApi.get<BookRequest>(`?&q=${id}&startIndex=0&maxResults=12`);
    return res.data;
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSimilarBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSimilarBooks.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.foundBooks = action.payload.items;
        state.totalBooks = action.payload.totalItems;
      })
      .addCase(fetchSimilarBooks.rejected, (state) => {
        state.status = 'error';
        state.totalBooks = 0;
        state.foundBooks = [];
      });
  },
});

export default searchSlice.reducer;
