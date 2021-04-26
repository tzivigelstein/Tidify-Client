import * as React from 'react'
import { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'
import useTotal from '../../useTotal'

function SvgComponent({ onPress }) {
  const [totalPrice, totalQuantity] = useTotal()
  return (
    <TouchableOpacity
      style={{ marginRight: 16, flexDirection: 'row', alignItems: 'center' }}
      onPress={onPress}
    >
      <Text
        style={{
          marginRight: 10,
          fontSize: 15,
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        ${totalPrice}
      </Text>
      <Svg
        viewBox="0 0 24 24"
        width={21}
        height={21}
        stroke="#fff"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Circle cx={9} cy={21} r={1} />
        <Circle cx={20} cy={21} r={1} />
        <Path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </Svg>
    </TouchableOpacity>
  )
}

export default SvgComponent
