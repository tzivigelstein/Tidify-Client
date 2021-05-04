import React, { useEffect, useState, useContext } from 'react'
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native'
import FirebaseContext from '../../context/firebase-context/firebaseContext'
import styles from './ordercard.styles'

const OrderCard = ({ product }) => {
  const { deleteOrder } = useContext(FirebaseContext)
  const { id, total, createdAt, status, deliveryTime } = product

  const min = 0.4
  const max = 1

  const [indicator] = useState(new Animated.Value(min))

  useEffect(() => {
    startAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const time = new Date(createdAt).toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
  })

  const parsedDeliveryTime = new Date(
    createdAt + deliveryTime
  ).toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
  })

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(indicator, {
        delay: 100,
        toValue: max,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(indicator, {
        delay: 100,
        toValue: min,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => startAnimation())
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.name}>${total}</Text>
        <View style={styles.indicatorContainer}>
          <Text style={styles.indicatorText}>
            {status ? 'Listo' : 'En proceso'}
          </Text>
          <View
            style={[
              styles.indicatorBorder,
              status && { borderColor: 'rgba(75, 181, 67, 0.4)' },
            ]}
          >
            <Animated.View
              style={[
                styles.indicator,
                { opacity: indicator },
                status && { backgroundColor: '#4BB543' },
              ]}
            ></Animated.View>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text>Ordenado a las {time}</Text>
        {!status && <Text>Listo a las {parsedDeliveryTime}</Text>}
      </View>
      {status && (
        <TouchableOpacity onPress={() => deleteOrder(id)} style={styles.button}>
          <Text style={styles.buttonText}>Retirar</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.id}>{id}</Text>
    </View>
  )
}

export default OrderCard
