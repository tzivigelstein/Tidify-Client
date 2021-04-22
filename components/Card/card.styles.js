import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
    paddingRight: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(229,229,228,0.6)',
  },

  image: {
    width: 91.75,
    height: 99,
    borderRadius: 16,
  },

  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    color: '#332927',
    fontSize: 16,
    fontWeight: '400',
  },

  price: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 12,
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  category: {
    color: '#706967',
    fontSize: 13,
  },

  bestSeller: {
    borderRadius: 6,
    backgroundColor: 'hsl(11, 91%, 68%)',
    color: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 5,
    textTransform: 'uppercase',
    fontSize: 11,
  },

  description: {
    color: '#332927',
    fontSize: 14,
  },
})

export default styles
