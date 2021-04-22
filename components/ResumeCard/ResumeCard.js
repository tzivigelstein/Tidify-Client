import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './resumecard.styles'

const ResumeCard = ({ product }) => {
  const {
    id,
    category,
    stock,
    name,
    description,
    price,
    image,
    quantity,
  } = product

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.heading}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>
              ${price} x {quantity}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.category}>{category}</Text>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
          <View style={styles.subTotalContainer}>
            <Text style={styles.subTotal}>
              Subtotal: ${(price * quantity).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ResumeCard
