import React, { useReducer } from 'react'
import AppReducer from './appReducer'
import AppContext from './appContext'
import {
  SELECT_PRODUCT,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT,
} from '../../types'

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
      let modifiedProduct
      state.cart.forEach(item => {
        if (item.id === productId) {
          modifiedProduct = {
            ...product,
            quantity: product.quantity + item.quantity,
          }
        }
      })
      state.cart = state.cart.filter(item => item.id !== product.id)
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: modifiedProduct,
      })
    } else {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
      })
    }
  }

  const deleteProduct = productId => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: productId,
    })
  }

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        product: state.product,
        selectProduct,
        addProductToCart,
        deleteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default FirebaseState
