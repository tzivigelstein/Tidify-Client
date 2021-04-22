import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'

function SvgComponent({ onPress }) {
  return (
    <TouchableOpacity style={{ marginRight: 16 }} onPress={onPress}>
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
