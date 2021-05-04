import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f55632',
    borderRadius: 32,
    shadowColor: 'rgb(32, 33, 36)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4,
    margin: 50,
    paddingHorizontal: 27.2,
    paddingVertical: 6.4,
    alignSelf: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  activityIndicator: {
    color: '#eee',
  },
})

export default styles
