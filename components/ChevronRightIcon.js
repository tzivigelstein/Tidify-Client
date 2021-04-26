import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={21}
      height={21}
      stroke="#fff"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M9 18l6-6-6-6" />
    </Svg>
  )
}

export default SvgComponent
