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
    fontSize: 14,
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

  description: {
    color: '#332927',
    fontSize: 14,
  },

  subTotalContainer: {
    marginTop: 10,
  },

  subTotal: {
    fontSize: 16,
    color: '#332927',
    textAlign: 'right',
    fontWeight: 'bold',
  },
})

export default styles
