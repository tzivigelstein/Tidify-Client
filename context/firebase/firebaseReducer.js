import {
  GET_PRODUCTS_SUCCESS,
  RESET_FILTER,
  UPDATE_SEARCH,
  GET_ORDER_STATUS,
  GET_PRODUCTS,
  UPDATE_LAST_DOCUMENT,
  GET_MORE_PRODUCTS,
  GET_MORE_PRODUCTS_SUCCESS,
  SET_USER,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        menu: action.payload,
        loading: false,
      }

    case GET_MORE_PRODUCTS:
      return {
        ...state,
        loadingMore: true,
      }

    case GET_MORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        menu: [...state.menu, ...action.payload],
      }

    case UPDATE_LAST_DOCUMENT:
      return {
        ...state,
        latestDoc: action.payload.docs[action.payload.docs.length - 1],
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

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
