import React, { useContext } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import ResumeCard from '../components/ResumeCard/ResumeCard'
import AppContext from '../context/app/appContext'
import styles from './resume.styles'
import ChevronRightIcon from '../components/ChevronRightIcon'
import useTotal from '../hooks/useTotal'
import { useNavigation } from '@react-navigation/native'
import firebase from '../firebase'
import ResumePlaceholder from '../components/ResumePlaceholder/ResumePlaceholder'

const Resume = () => {
  const { product, cart, emptyCart } = useContext(AppContext)
  const [totalPrice, totalQuantity] = useTotal()

  const router = useNavigation()

  const onContinue = () => {
    Alert.alert('Finalizar pedido', `¿Queres finalizar tu pedido?`, [
      {
        text: 'Cancelar',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      { text: 'Finalizar', onPress: () => order() },
    ])
  }

  const order = async () => {
    const min = 60000 * 20
    const max = 60000 * 40
    const deliveryTime = Math.floor(Math.random() * (max - min) + min)
    const newOrder = {
      deliveryTime,
      status: false,
      total: Number(totalPrice),
      cart,
      createdAt: Date.now(),
    }

    try {
      await firebase.db.collection('orders').add(newOrder)
      emptyCart()
    } catch (error) {
      console.log(error)
    }

    router.navigate('Progress')
  }

  return (
    <View style={{ flex: 1 }}>
      {cart.length !== 0 ? (
        <>
          <FlatList
            style={styles.cardsContainer}
            data={cart}
            renderItem={({ item }) => <ResumeCard product={item} />}
            keyExtractor={item => item.id}
          />
          <View style={styles.totalContainer}>
            <View style={styles.pricePorductContainer}>
              <Text style={styles.total}>Total: ${totalPrice}</Text>
              <Text style={styles.products}>Productos: {totalQuantity}</Text>
            </View>
            <TouchableOpacity onPress={onContinue} style={styles.finishButton}>
              <Text style={styles.finishButtonText}>Finalizar pedido</Text>
              <ChevronRightIcon width={18} height={18} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ResumePlaceholder />
          </View>
          <Text style={styles.muted}>
            Te veo con hambre pero el carrito está vacio... 🤔
          </Text>
          <Text style={styles.cta}>Agregate algo 👇</Text>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={() => router.navigate('Menu')}
          >
            <Text style={styles.finishButtonText}>Ir al menú</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Resume
