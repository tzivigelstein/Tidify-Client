import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingRight: 16,
    marginRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(229,229,228,0.6)',
  },

  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
  },

  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  indicatorText: {
    fontSize: 18,
    marginRight: 12,
  },

  indicatorBorder: {
    borderWidth: 2,
    borderColor: 'rgba(255, 193, 7, 0.4)',
    padding: 3,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },

  indicator: {
    flex: 1,
    backgroundColor: '#ffc107',
    borderRadius: 16 / 2,
    elevation: 0,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  button: {
    backgroundColor: 'hsl(11, 91%, 68%)',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginLeft: 16,
    marginVertical: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  id: {
    fontSize: 13,
    marginVertical: 10,
    color: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
  },
})

export default styles
