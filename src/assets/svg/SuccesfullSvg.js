import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={116}
    height={122}
    fill="none"
    {...props}
  >
    <Circle cx={61.5} cy={61} r={46} fill="#fff" />
    <Path
      stroke="#66B600"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.333}
      d="M74.833 51 56.5 69.333 48.167 61"
    />
    <Circle cx={68} cy={2.5} r={2.5} fill="#fff" />
    <Circle cx={15.5} cy={10} r={10} fill="#fff" />
    <Circle cx={5.5} cy={86} r={5} fill="#fff" />
    <Circle cx={44} cy={119.5} r={2.5} fill="#fff" />
    <Circle cx={113} cy={58.5} r={2.5} fill="#fff" />
    <Circle cx={103.5} cy={21} r={1} fill="#fff" />
    <Circle cx={107.5} cy={107} r={5} fill="#fff" />
  </Svg>
)
export default SvgComponent
