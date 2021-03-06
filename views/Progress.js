import React, { useContext } from 'react'
import { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import OrderCard from '../components/OrderCard/OrderCard'
import FirebaseContext from '../context/firebase/firebaseContext'
import styles from './progress.style'

const Progress = () => {
  const { getOrderStatus, orders } = useContext(FirebaseContext)

  useEffect(() => {
    getOrderStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.cardsContainer}
        data={orders}
        renderItem={({ item }) => <OrderCard product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Progress
