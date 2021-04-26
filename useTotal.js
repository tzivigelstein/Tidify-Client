import { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import AppContext from './context/app-context/appContext'

const useTotal = () => {
  const { cart } = useContext(AppContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const prices = cart.map(item => item.price * item.quantity)
    setTotalPrice(prices.reduce((acc, el) => acc + el, 0))

    const quantity = cart.map(item => item.quantity)
    setTotalQuantity(quantity.reduce((acc, el) => acc + el, 0))
  }, [cart])

  return [totalPrice.toFixed(2), totalQuantity]
}

export default useTotal
