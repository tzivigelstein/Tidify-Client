import React, { useReducer } from 'react'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import firebase from '../../firebase'
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  UPDATE_SEARCH,
  RESET_FILTER,
  GET_ORDER_STATUS,
} from '../../types'

const FirebaseState = ({ children }) => {
  const initialState = {
    menu: [],
    filteredMenu: [],
    orders: {},
  }

  const [state, dispatch] = useReducer(FirebaseReducer, initialState)

  const getProducts = () => {
    firebase.db
      .collection('products')
      .where('stock', '==', true)
      .onSnapshot(handleSnapshot)

    dispatch({
      type: GET_PRODUCTS,
    })

    function handleSnapshot(snapshot) {
      let products = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: products,
      })
    }
  }

  const filterMenu = searchTerm => {
    const parsedTerm = searchTerm.toLowerCase()
    const filtered = state.menu.filter(
      product =>
        product.name.toLowerCase().includes(parsedTerm) ||
        product.description.toLowerCase().includes(parsedTerm)
    )

    dispatch({
      type: UPDATE_SEARCH,
      payload: filtered,
    })
  }

  const filterCategory = category => {
    const filtered = state.menu.filter(product =>
      product.category.toLowerCase().includes(category)
    )

    dispatch({
      type: UPDATE_SEARCH,
      payload: filtered,
    })
  }

  const resetFilter = () => {
    dispatch({
      type: RESET_FILTER,
    })
  }

  const getOrderStatus = () => {
    firebase.db.collection('orders').onSnapshot(handleSnapshot)

    function handleSnapshot(snapshot) {
      let products = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      dispatch({
        type: GET_ORDER_STATUS,
        payload: products,
      })
    }
  }

  const deleteOrder = async id => {
    await firebase.db.collection('orders').doc(id).delete()
  }

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        menu: state.menu,
        filteredMenu: state.filteredMenu,
        orders: state.orders,
        getProducts,
        filterMenu,
        filterCategory,
        resetFilter,
        getOrderStatus,
        deleteOrder,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseState
