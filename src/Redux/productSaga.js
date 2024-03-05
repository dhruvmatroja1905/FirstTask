// productSaga.js

import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../API/JsonApi'; // Import your API file
import { ActionTypes } from './constants/action-types'; // Import your action types
import { setProducts, fetchProductsFailure } from '../Redux/Action/productAction'; // Import your action creators

function* fetchProductsSaga() {
  try {
    const response = yield call(api.get, '/Product');
    yield put(setProducts(response.data)); // Dispatch action to store fetched products
  } catch (error) {
    yield put(fetchProductsFailure(error.message)); // Dispatch action to handle fetch failure
  }
}

export function* watchFetchProducts() {
  yield takeLatest(ActionTypes.FETCH_PRODUCTS_REQUEST, fetchProductsSaga); // Listen for FETCH_PRODUCTS_REQUEST action
}
