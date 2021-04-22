import React, { useContext, useState, useEffect } from 'react'
import { TextInput, View } from 'react-native'
import styles from './searchbar.styles'
import SearchIcon from '../SearchIcon'
import TimesIcon from '../TimesIcon'
import FirebaseContext from '../../context/firebase-context/firebaseContext'

const SearchBar = () => {
  const { filterMenu } = useContext(FirebaseContext)

  const [value, setValue] = useState('')

  useEffect(() => {
    filterMenu(value)
  }, [value])

  return (
    <View style={styles.container}>
      <SearchIcon width={21} height={21} />
      <TextInput
        placeholderTextColor="rgba(0,0,0,0.6)"
        onChangeText={term => setValue(term)}
        style={styles.input}
        placeholder="Buscá tu próxima comida"
        value={value}
      />
      {value !== '' && <TimesIcon onPress={() => setValue('')} />}
    </View>
  )
}

export default SearchBar
