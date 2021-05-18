import React, { useEffect, useContext } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './splashscreen.styles'
import FirebaseContext from '../context/firebase/firebaseContext'

const SplashScreen = () => {
  const router = useNavigation()
  const { getProducts, menu } = useContext(FirebaseContext)

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    menu.length !== 0 && router.navigate('Menu')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [, menu])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>tidify</Text>
    </View>
  )
}

export default SplashScreen
