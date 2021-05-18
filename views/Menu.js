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
  /* 
  useEffect(() => {
    console.log(menu)
  }, [menu]) */

  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
        <CategoriesBar />
      </View>
      <FlatList
        style={styles.cardsContainer}
        data={menu}
        renderItem={({ item }) => {
          const {
            id,
            category,
            stock,
            name,
            description,
            price,
            image,
            bestSeller,
          } = item
          return (
            <Card
              onPress={() => selectProductAndNavigate(item)}
              id={id}
              category={category}
              stock={stock}
              name={name}
              description={description}
              price={price}
              image={image}
              bestSeller={bestSeller}
            />
          )
        }}
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
              color="#f55632"
            />
          )
        }
      />
    </View>
  )
}

export default Menu
