import React from 'react'
import { TouchableHighlight, Text, View, Button } from 'react-native'
import styles from '../styles/global'
import { useNavigation } from '@react-navigation/native'

const New = () => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Menu')}
        underlayColor="#DE5E21"
        style={styles.button}
      >
        <Text style={styles.buttonText}>Añadir</Text>
      </TouchableHighlight>
    </View>
  )
}

export default New
