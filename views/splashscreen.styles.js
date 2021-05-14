import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f55632',
    paddingVertical: 186,
  },

  text: {
    fontSize: 64,
    color: '#fff',
    fontFamily: 'steady-regular',
  },

  googleLogo: {
    width: 30,
    height: 30,
  },

  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  loginButtonText: {
    color: '#000',
    marginLeft: 10,
  },
})

export default styles
