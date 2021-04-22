import { GET_PRODUCTS_SUCCESS, RESET_FILTER, UPDATE_SEARCH } from '../../types'

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
    default:
      return state
  }
}
