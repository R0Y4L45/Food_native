import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#184639"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 5H5m6 4H5m6 4H7M1 1h14v18l-1.032-.884a2 2 0 0 0-2.603 0L10.333 19l-1.031-.884a2 2 0 0 0-2.604 0L5.667 19l-1.032-.884a2 2 0 0 0-2.603 0L1 19V1Z"
    />
  </Svg>
)
export default SvgComponent
