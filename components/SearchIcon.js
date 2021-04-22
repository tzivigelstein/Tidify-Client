import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      style={{ marginRight: 8 }}
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="#332927"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35" />
    </Svg>
  )
}

export default SvgComponent
