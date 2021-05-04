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
  UPDATE_LAST_DOCUMENT,
  GET_MORE_PRODUCTS_SUCCESS,
  GET_MORE_PRODUCTS,
} from '../../types'

const FirebaseState = ({ children }) => {
  const initialState = {
    menu: [],
    filteredMenu: [],
    orders: [],
    loading: false,
    latestDoc: null,
  }

  const [state, dispatch] = useReducer(FirebaseReducer, initialState)

  const PRODUCT_LIMIT = 8

  const getProducts = () => {
    dispatch({
      type: GET_PRODUCTS,
    })
    firebase.db
      .collection('products')
      .where('stock', '==', true)
      .orderBy('createdAt')
      .limit(PRODUCT_LIMIT)
      .onSnapshot(handleSnapshot, err => console.log('error peticion', err))

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

      products.length !== 0 &&
        dispatch({
          type: UPDATE_LAST_DOCUMENT,
          payload: snapshot,
        })
    }
  }

  const getMoreProducts = () => {
    dispatch({
      type: GET_MORE_PRODUCTS,
    })
    firebase.db
      .collection('products')
      .where('stock', '==', true)
      .orderBy('createdAt')
      .startAfter(state.latestDoc)
      .limit(PRODUCT_LIMIT)
      .onSnapshot(handleSnapshot, err => console.log('error peticion', err))

    function handleSnapshot(snapshot) {
      let products = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })

      dispatch({
        type: GET_MORE_PRODUCTS_SUCCESS,
        payload: products,
      })

      products.length !== 0 &&
        dispatch({
          type: UPDATE_LAST_DOCUMENT,
          payload: snapshot,
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
    firebase.db
      .collection('orders')
      .orderBy('status', 'desc')
      .onSnapshot(handleSnapshot, error => console.log(error))

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
        loading: state.loading,
        latestDoc: state.latestDoc,
        getProducts,
        getMoreProducts,
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
