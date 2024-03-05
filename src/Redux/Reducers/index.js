import { combineReducers } from "redux";
import { addToCartReducer, productsReducer, selectedProductsReducer, toggleCartReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  togglecart: toggleCartReducer
});
export default reducers;