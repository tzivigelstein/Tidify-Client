import React, { useContext } from 'react'
import { FlatList, Text, View } from 'react-native'
import ResumeCard from '../components/ResumeCard/ResumeCard'
import AppContext from '../context/app-context/appContext'
import styles from './resume.styles'

const Resume = () => {
  const { product, cart } = useContext(AppContext)
  const prices = cart.map(item => item.price * item.quantity)
  const totalPrice = prices.reduce((acc, el) => acc + el, 0)

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.cardsContainer}
        data={cart}
        renderItem={({ item }) => <ResumeCard product={item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  )
}

export default Resume
