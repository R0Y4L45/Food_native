import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#42C2E5"
      d="M9 .928a8.357 8.357 0 0 1 8.357 8.358c0 3.531-2.481 7.38-7.38 11.586a1.5 1.5 0 0 1-1.957-.001l-.324-.281C3.015 16.492.643 12.738.643 9.286A8.357 8.357 0 0 1 9 .928Zm0 1.286a7.071 7.071 0 0 0-7.071 7.072c0 3.001 2.184 6.46 6.612 10.334l.32.277a.214.214 0 0 0 .279 0c4.642-3.987 6.931-7.538 6.931-10.611A7.071 7.071 0 0 0 9 2.214Zm0 3.857A3.214 3.214 0 1 1 9 12.5 3.214 3.214 0 0 1 9 6.07Zm0 1.286a1.929 1.929 0 1 0 0 3.857 1.929 1.929 0 0 0 0-3.857Z"
    />
  </Svg>
)
export default SvgComponent
