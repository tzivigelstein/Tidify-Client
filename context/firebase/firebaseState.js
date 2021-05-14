import React, { useReducer } from 'react'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import firebase from '../../firebase'
import firebaseLib from 'firebase'
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
  SET_USER,
} from '../../types'

const FirebaseState = ({ children }) => {
  const initialState = {
    menu: [],
    filteredMenu: [],
    orders: [],
    loading: false,
    loadingMore: false,
    latestDoc: null,
    user: null,
  }

  const [state, dispatch] = useReducer(FirebaseReducer, initialState)

  const PRODUCT_LIMIT = 8

  const getProducts = async () => {
    dispatch({
      type: GET_PRODUCTS,
    })
    const query = await firebase.db
      .collection('products')
      .where('stock', '==', true)
      .orderBy('createdAt')
      .limit(PRODUCT_LIMIT)
      .get()

    !query.empty && handleSnapshot(query)
    console.log(!query.empty)
    function handleSnapshot(snapshot) {
      console.log('llegaron los prod')
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

  const getMoreProducts = async () => {
    dispatch({
      type: GET_MORE_PRODUCTS,
    })
    const query = await firebase.db
      .collection('products')
      .where('stock', '==', true)
      .orderBy('createdAt')
      .startAfter(state.latestDoc)
      .limit(PRODUCT_LIMIT)
      .get()

    !query.empty && handleSnapshot(query)

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

  const loginWithGoogle = async () => {
    const googleProvider = firebaseLib.auth.GoogleAuthProvider()
    const data = await firebaseLib.auth().signInWithPopup(googleProvider)

    return data
  }

  const onAuthStateChanged = () => {
    const mapUserFromFirebaseAuth = data => {
      const { displayName, email, photoURL, uid } = data
      return {
        displayName,
        email,
        photoURL,
        uid,
      }
    }
    return firebaseLib.auth().onAuthStateChanged(user => {
      const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
      dispatch({
        type: SET_USER,
        payload: normalizedUser,
      })
    })
  }

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        menu: state.menu,
        filteredMenu: state.filteredMenu,
        orders: state.orders,
        loading: state.loading,
        loadingMore: state.loadingMore,
        latestDoc: state.latestDoc,
        user: state.user,
        getProducts,
        getMoreProducts,
        filterMenu,
        filterCategory,
        resetFilter,
        getOrderStatus,
        deleteOrder,
        loginWithGoogle,
        onAuthStateChanged,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseState
