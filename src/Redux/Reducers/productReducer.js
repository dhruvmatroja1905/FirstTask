import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  error: '',
  cart:[],
  isCartOpen: false,
  cartQuantity: 0,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };


    case ActionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, error: payload };
   

    case ActionTypes.ADD_TO_CART: // Handle ADD_TO_CART action
      return { ...state, cart: [...state.cart, payload] };
       

      case ActionTypes.UPDATE_CART_QUNTITY:
        let updatedCart = [];
        // Check if payload is a valid number
        if (!isNaN(payload)) {
          updatedCart = state.cart.map((product) => {
            // Check if the product id matches the payload id
            if (product.id === payload.id) {
              // Update the quantity property
              return { ...product, quantity: product.quantity + 1 };
            } else {
              return product;
            }
          });
        }
        return { ...state, cart: updatedCart };
      default:
        return state;
      

  }

  
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};


export const toggleCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};



