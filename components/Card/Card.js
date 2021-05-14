import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './card.styles'

const Card = ({ product, onPress }) => {
  const {
    id,
    category,
    stock,
    name,
    description,
    price,
    image,
    bestSeller,
  } = product
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
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
          <View style={styles.subContainer}>
            <Text style={styles.category}>{category}</Text>
            {bestSeller && <Text style={styles.bestSeller}>Más vendido</Text>}
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card
