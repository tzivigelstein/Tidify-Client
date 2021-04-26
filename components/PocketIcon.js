import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="#fff"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z" />
      <Path d="M8 10l4 4 4-4" />
    </Svg>
  )
}

export default SvgComponent
