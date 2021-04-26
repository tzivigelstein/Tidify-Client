import React, { useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebase-context/firebaseContext'
import AppContext from '../context/app-context/appContext'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import Card from '../components/Card/Card'
import styles from './menu.styles'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../components/SearchBar/SearchBar'
import CategoriesBar from '../components/CategoriesBar/CategoriesBar'
import useTotal from '../useTotal'

const Menu = () => {
  const { menu, filteredMenu, getProducts } = useContext(FirebaseContext)
  const { selectProduct, product } = useContext(AppContext)

  const router = useNavigation()

  const selectProductAndNavigate = item => {
    selectProduct(item)
    router.navigate('Product')
  }

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={styles.container}>
      {menu.length !== 0 ? (
        <>
          <View>
            <SearchBar />
            <CategoriesBar />
          </View>
          <FlatList
            style={styles.cardsContainer}
            data={filteredMenu.length !== 0 ? filteredMenu : menu}
            renderItem={({ item }) => (
              <Card
                onPress={() => selectProductAndNavigate(item)}
                product={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        </>
      ) : (
        <ActivityIndicator
          color={globalStyles.activityIndicator.color}
          size="large"
        />
      )}
    </View>
  )
}

export default Menu
