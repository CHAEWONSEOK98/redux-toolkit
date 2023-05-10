import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { artistApi } from '../services/artistService';
import { albumApi } from '../services/albumService';

export const store = configureStore({
  reducer: {
    [artistApi.reducerPath]: artistApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(artistApi.middleware)
      .concat(albumApi.middleware),
});

setupListeners(store.dispatch);
