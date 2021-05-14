import { useContext, useEffect } from 'react'
import FirebaseContext from '../context/firebase/firebaseContext'

const useUser = () => {
  const { user, onAuthStateChanged } = useContext(FirebaseContext)
  useEffect(() => {
    onAuthStateChanged()
  }, [])
  return user
}

export default useUser
