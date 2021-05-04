import React, { useContext, useState, useEffect } from 'react'
import { TextInput, View } from 'react-native'
import styles from './searchbar.styles'
import SearchIcon from '../SearchIcon'
import TimesIcon from '../TimesIcon'
import FirebaseContext from '../../context/firebase-context/firebaseContext'

const SearchBar = () => {
  const { filterMenu, resetFilter } = useContext(FirebaseContext)

  const [value, setValue] = useState('')

  let timeout

  const handleOnChangeText = term => {
    setValue(term)
    timeout = setTimeout(() => {
      filterMenu(value)
    }, 260)
  }

  useEffect(() => {
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCancel = () => {
    setValue('')
    resetFilter()
  }

  return (
    <View style={styles.container}>
      <SearchIcon width={21} height={21} />
      <TextInput
        placeholderTextColor="rgba(0,0,0,0.6)"
        onChangeText={term => handleOnChangeText(term)}
        style={styles.input}
        placeholder="Buscá tu próxima comida"
        value={value}
      />
      {value !== '' && <TimesIcon onPress={handleCancel} />}
    </View>
  )
}

export default SearchBar
