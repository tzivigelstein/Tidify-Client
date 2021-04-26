import {
  GET_PRODUCTS_SUCCESS,
  RESET_FILTER,
  UPDATE_SEARCH,
  GET_ORDER_STATUS,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        menu: action.payload,
      }

    case UPDATE_SEARCH:
      return {
        ...state,
        filteredMenu: action.payload,
      }

    case RESET_FILTER:
      return {
        ...state,
        filteredMenu: [],
      }

    case GET_ORDER_STATUS:
      return {
        ...state,
        orders: action.payload,
      }
    default:
      return state
  }
}
