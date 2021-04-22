import React, { useReducer } from 'react'
import AppReducer from './appReducer'
import AppContext from './appContext'
import { SELECT_PRODUCT, ADD_PRODUCT_TO_CART } from '../../types'

const FirebaseState = ({ children }) => {
  const initialState = {
    cart: [],
    product: null,
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)

  const selectProduct = product => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: product,
    })
  }

  const addProductToCart = product => {
    const productId = product.id

    const idCart = state.cart.map(item => item.id)

    const hasSameId = () => {
      return idCart.includes(productId)
    }

    if (hasSameId()) {
      state.cart.map(item => {
        if (item.id === productId) {
          item.quantity += product.quantity
        }
      })
    } else {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        product: state.product,
        selectProduct,
        addProductToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default FirebaseState
