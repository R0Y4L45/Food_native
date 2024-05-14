import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={118}
    height={122}
    fill="none"
    {...props}
  >
    <Circle cx={61.5} cy={61} r={46} fill="#fff" />
    <Path
      fill="red"
      d="M47.545 49.545a1.858 1.858 0 0 1 2.63 0L60 59.375l9.825-9.83a1.86 1.86 0 0 1 2.63 2.63L62.626 62l9.83 9.825a1.86 1.86 0 0 1-2.63 2.63l-9.825-9.83-9.826 9.83a1.858 1.858 0 1 1-2.63-2.63l9.83-9.825-9.83-9.826a1.856 1.856 0 0 1 0-2.63Z"
    />
    <Circle cx={68} cy={2.5} r={2.5} fill="#fff" />
    <Circle cx={15.5} cy={10} r={10} fill="#fff" />
    <Circle cx={5.5} cy={86} r={5} fill="#fff" />
    <Circle cx={44} cy={119.5} r={2.5} fill="#fff" />
    <Circle cx={113} cy={58.5} r={2.5} fill="#fff" />
    <Circle cx={107.5} cy={25} r={5} fill="#fff" />
    <Circle cx={110} cy={109.5} r={7.5} fill="#fff" />
  </Svg>
)
export default SvgComponent
