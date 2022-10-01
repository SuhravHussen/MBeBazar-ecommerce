import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from 'next-redux-wrapper';
import { productApi } from '../services/Products/api';
import { profile } from '../services/Profile/api';
import cartSlice from '../Slices/cartSlice';
import userSlice from './../Slices/userSlice';

const reducers = combineReducers({
  cart: cartSlice,
  user: userSlice,
  [productApi.reducerPath]: productApi.reducer,
  [profile.reducerPath]: profile.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware , profile.middleware ),
    devTools: true,
  });
setupListeners(makeStore().dispatch);
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
