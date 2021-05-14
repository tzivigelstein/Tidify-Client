import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardsContainer: {
    paddingHorizontal: 16,
  },

  totalContainer: {
    paddingHorizontal: 16,
    padding: 32,
    borderTopColor: 'rgba(229,229,228,1)',
    borderTopWidth: 1,
  },

  pricePorductContainer: {
    marginBottom: 16,
  },

  total: {
    fontSize: 21,
  },

  products: {
    fontSize: 16,
  },

  finishButton: {
    backgroundColor: '#f55632',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },

  finishButtonText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 16,
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  imageContainer: {
    width: '100%',
    marginVertical: 32,
  },

  muted: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 15,
    textAlign: 'center',
  },

  cta: {
    marginVertical: 8,
    color: 'rgba(0,0,0,0.8)',
    fontSize: 18,
    textAlign: 'center',
  },
})

export default styles
