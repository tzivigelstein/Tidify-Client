import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },

  infoContainer: {
    padding: 16,
    paddingRight: 24,
  },

  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  name: {
    color: '#332927',
    fontSize: 21,
    fontWeight: 'bold',
  },

  price: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 18,
  },

  subContainer: {
    flexDirection: 'row',
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  category: {
    color: '#706967',
    fontSize: 15,
  },

  bestSeller: {
    backgroundColor: 'hsl(11, 91%, 68%)',
    borderRadius: 6,
    padding: 4,
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 13,
  },

  sold: {
    color: 'hsl(11, 91%, 68%)',
    fontWeight: 'bold',
    marginBottom: 16,
  },

  description: {
    color: '#332927',
    fontSize: 16,
  },

  label: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.6)',
  },

  descriptionContainer: {
    borderTopColor: 'rgba(229,229,228,0.6)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(229,229,228,0.6)',
    borderBottomWidth: 1,
    paddingVertical: 16,
  },

  pickerContainer: {
    paddingHorizontal: 16,
  },

  buttonsContainer: {
    marginHorizontal: 8,
    flexDirection: 'row',
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f6553f',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 8,
  },

  buttonCart: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    borderColor: '#f6553f',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonTextCart: {
    color: '#f6553f',
    textAlign: 'center',
    fontSize: 16,
  },
})

export default styles
