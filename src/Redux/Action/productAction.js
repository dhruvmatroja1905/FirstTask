import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};


export const addToCart = (product) => {
return{
  type: ActionTypes.ADD_TO_CART,
  payload: product
  
}
};

export const toggleCart = (isOpen) => {
  return {
    type: ActionTypes.TOGGLE_CART,
    payload: isOpen
  };
};

export const updateCartQuantity = (quantity) => {
  return {
    type: ActionTypes.UPDATE_CART_QUNTITY,
    payload: quantity
  };
};



export const fetchProductsRequest = () => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_REQUEST
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};
