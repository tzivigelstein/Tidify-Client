import React, { useContext, useState } from 'react'
import { Image, Text, View, Alert, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import styles from './product.styles.js'
import AppContext from '../context/app-context/appContext'
import { useNavigation } from '@react-navigation/native'

const Product = () => {
  const { product, addProductToCart } = useContext(AppContext)
  const [quantity, setQuantity] = useState('1')
  const router = useNavigation()
  const {
    id,
    category,
    stock,
    name,
    description,
    price,
    image,
    bestSeller,
    sold,
  } = product

  const onContinue = () => {
    Alert.alert('Añadir al pedido', `¿Queres añadir ${name} al pedido?`, [
      {
        text: 'Cancelar',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      { text: 'Confirmar', onPress: () => confirmCartOrder() },
    ])
    const confirmCartOrder = () => {
      const intQuantity = parseInt(quantity)
      const newOrder = { ...product, quantity: intQuantity }
      addProductToCart(newOrder)
      router.navigate('Resume')
    }
  }

  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.heading}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <View>
          <View style={styles.subContainer}>
            <Text style={styles.category}>{category}</Text>
            {bestSeller && <Text style={styles.bestSeller}>Más vendido</Text>}
          </View>
          <Text style={styles.sold}>
            {sold}
            {sold === 1 ? ' vendido' : ' vendidos'}
          </Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.label}>Descripción</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Cantidad</Text>
        <Picker
          prompt="Cantidad"
          selectedValue={quantity}
          onValueChange={value => setQuantity(value)}
        >
          <Picker.Item label="1 unidad" value="1" />
          <Picker.Item label="2 unidades" value="2" />
          <Picker.Item label="3 unidades" value="3" />
          <Picker.Item label="4 unidades" value="4" />
          <Picker.Item label="5 unidades" value="5" />
          <Picker.Item label="6 unidades" value="6" />
        </Picker>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onContinue} style={styles.buttonCart}>
          <Text style={styles.buttonTextCart}>Añadir al carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onContinue} style={styles.button}>
          <Text style={styles.buttonText}>Comprar ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Product
