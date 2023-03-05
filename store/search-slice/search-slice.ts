import booksApi from '@/axios/books-api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookApi, BookRequest } from '@/interfaces/book-api';
import { RootState } from '@/store/store';

interface ISearch {
  foundBooks: BookApi[];
  status: 'loading' | 'loaded' | 'error';
  maxResults: number;
  startIndex: number;
  template: string;
}

const initialState: ISearch = {
  foundBooks: [],
  status: 'loaded',
  maxResults: 12,
  startIndex: 0,
  template: '',
};

export const fetchSimilarBooks = createAsyncThunk<BookRequest, void, { state: RootState }>(
  'search/fetchSimilarBooks',
  async (_, {getState}) => {
    const {startIndex, maxResults, template} = getState().search;

    const res = await booksApi.get<BookRequest>(`?&q=${template}&startIndex=${startIndex}&maxResults=${maxResults}`);
    return res.data;
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
      state.startIndex = 0;
      state.foundBooks = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSimilarBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSimilarBooks.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.foundBooks.push(...action.payload.items);
        state.startIndex += state.maxResults;
      })
      .addCase(fetchSimilarBooks.rejected, (state) => {
        state.status = 'error';
        state.foundBooks = [];
      });
  },
});

export const {changeTemplate} = searchSlice.actions;
export default searchSlice.reducer;
