import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableHighlight } from 'react-native'
import FirebaseContext from '../../context/firebase-context/firebaseContext'
import styles from './categoriesbar.styles'
import TimesIcon from '../TimesIcon'
import { useNavigation } from '@react-navigation/core'

const CATEGORIES = [
  { category: 'Desayuno', value: 'desayuno' },
  { category: 'Ensaladas', value: 'ensalada' },
  { category: 'Postres', value: 'postres' },
  { category: 'Almuerzos', value: 'almuerzos' },
  { category: 'Cenas', value: 'cenas' },
  { category: 'Bebidas', value: 'bebidas' },
]

const CategoriesBar = () => {
  const { filterCategory, resetFilter } = useContext(FirebaseContext)

  const router = useNavigation()

  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    router.addListener('beforeRemove', e => {
      resetFilter()
      setActiveCategory(null)
      e.preventDefault()
      return
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePress = cat => {
    if (cat === activeCategory) {
      setActiveCategory(null)
      resetFilter()
    } else {
      setActiveCategory(cat)
      filterCategory(cat)
    }
  }

  return (
    <ScrollView horizontal style={styles.container}>
      {CATEGORIES.map(category => (
        <TouchableHighlight
          key={category.value}
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => handlePress(category.value)}
          style={[
            styles.chip,
            category.value === activeCategory && {
              backgroundColor: '#f55632',
            },
          ]}
        >
          <>
            <Text
              style={[
                styles.chipText,
                category.value === activeCategory && { color: '#fff' },
              ]}
            >
              {category.category}
            </Text>
            {category.value === activeCategory && (
              <TimesIcon width={16} height={16} color="#fff" />
            )}
          </>
        </TouchableHighlight>
      ))}
    </ScrollView>
  )
}

export default CategoriesBar
