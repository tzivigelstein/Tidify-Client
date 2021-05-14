import React, { useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebase/firebaseContext'
import AppContext from '../context/app/appContext'
import { ActivityIndicator, FlatList, View } from 'react-native'
import Card from '../components/Card/Card'
import styles from './menu.styles'

import { useNavigation } from '@react-navigation/native'
import SearchBar from '../components/SearchBar/SearchBar'
import CategoriesBar from '../components/CategoriesBar/CategoriesBar'

const Menu = () => {
  const {
    menu,
    filteredMenu,
    getProducts,
    loading,
    loadingMore,
    getMoreProducts,
  } = useContext(FirebaseContext)
  const { selectProduct } = useContext(AppContext)

  const router = useNavigation()

  const selectProductAndNavigate = item => {
    selectProduct(item)
    router.navigate('Product')
  }

  useEffect(() => {
    router.addListener('beforeRemove', e => {
      e.preventDefault()
      return
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
        <CategoriesBar />
      </View>
      <FlatList
        style={styles.cardsContainer}
        data={filteredMenu.length !== 0 ? filteredMenu : menu}
        renderItem={({ item }) => (
          <Card onPress={() => selectProductAndNavigate(item)} product={item} />
        )}
        keyExtractor={item => item.id}
        refreshing={loading}
        onRefresh={getProducts}
        onEndReached={getMoreProducts}
        onEndReachedThreshold={0.7}
        ListFooterComponent={
          loadingMore && (
            <ActivityIndicator
              style={{ marginVertical: 16 }}
              size="small"
              color="#999"
            />
          )
        }
      />
    </View>
  )
}

export default Menu
