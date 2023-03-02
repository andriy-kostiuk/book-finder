import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
    reducer: {},
    devTools: true,
  },
)

export type AppStore = ReturnType<typeof makeStore>

export const wrapper = createWrapper<AppStore>(makeStore)
