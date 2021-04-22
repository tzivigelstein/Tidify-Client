import { SELECT_PRODUCT, ADD_PRODUCT_TO_CART } from '../../types'

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
    default:
      return state
  }
}
