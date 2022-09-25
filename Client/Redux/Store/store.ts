import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import userSlice from './../Slices/userSlice';
import cartSlice from '../Slices/cartSlice';

const reducers = combineReducers({
  cart: cartSlice,
  user: userSlice,
});

const makeStore = () =>
  configureStore({
    reducer: reducers,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
