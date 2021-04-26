import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './headerright.styles'
import CartIcon from '../CartIcon/CartIcon'
import PocketIcon from '../PocketIcon'

const HeaderRight = () => {
  const router = useNavigation()
  return (
    <View style={styles.container}>
      <CartIcon onPress={() => router.navigate('Resume')} />
      <PocketIcon onPress={() => router.navigate('Progress')} />
    </View>
  )
}

export default HeaderRight
