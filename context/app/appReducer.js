import {
  SELECT_PRODUCT,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT,
  EMPTY_CART,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}
