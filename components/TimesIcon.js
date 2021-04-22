import * as React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Svg, { Path } from 'react-native-svg'

function SvgComponent({ onPress, color, width, height }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Svg
        viewBox="0 0 24 24"
        width={width ? width : 21}
        height={height ? height : 21}
        stroke={color ? color : '#332927'}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M18 6L6 18M6 6l12 12" />
      </Svg>
    </TouchableWithoutFeedback>
  )
}

export default SvgComponent
