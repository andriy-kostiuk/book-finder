import { configureStore, combineReducers, Action, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import searchReducer from './search-slice/search-slice';
import wishListReducer from './wish-list-slice/wish-list-slice';

const combinedReducers = combineReducers({
  search: searchReducer,
  wishList: wishListReducer,
});


const reducer: typeof combinedReducers = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducers(state, action);
  }
};

const makeStore = () => configureStore({
    reducer,
    devTools: true,
  },
);

type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore);
