import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import reducers from "./Reducers/index";
import productSaga, { watchFetchProducts } from './productSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(watchFetchProducts);

export default store;
