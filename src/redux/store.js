import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { allTransportReducer } from './allTransport/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
// import { detailsReducer } from './details/slice';

const persistConfig = {
  key: 'allTransport',
  storage,
  whitelist: ['allTransport'],
};

export const store = configureStore({
  reducer: {
    allTransport: persistReducer(persistConfig, allTransportReducer),
    // details: detailsReducer,
  },
});

export const persistor = persistStore(store);
