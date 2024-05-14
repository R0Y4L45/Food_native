import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#757575" clipPath="url(#a)">
      <Path d="M12.721 3.617h2.797l-1.06 1.061a.703.703 0 0 0 .996.994l2.255-2.26a.704.704 0 0 0-.016-1.01L15.453.16a.703.703 0 1 0-.994.993l1.056 1.058H12.69C5.258 2.21.54 10.3 4.267 16.803a.703.703 0 0 0 1.22-.7c-3.208-5.595.898-12.518 7.234-12.486ZM21.134 7.103a.703.703 0 0 0-1.22.7c3.184 5.553-.834 12.486-7.213 12.486H9.884l1.059-1.06a.703.703 0 1 0-.995-.994l-2.256 2.259a.704.704 0 0 0 .017 1.01l2.239 2.243a.703.703 0 0 0 .995-.994l-1.056-1.058h2.823c7.437 0 12.151-8.09 8.424-14.592Z" />
      <Path d="M11.998 9.844h2.812a.703.703 0 0 0 0-1.406h-1.406v-.704a.703.703 0 0 0-1.406 0v.704c-1.164 0-2.11.946-2.11 2.109s.946 2.11 2.11 2.11h1.406a.704.704 0 0 1 0 1.406H10.59a.703.703 0 0 0 0 1.406h1.407v.703a.703.703 0 0 0 1.406 0v-.703c1.166 0 2.11-.943 2.11-2.11 0-1.163-.947-2.109-2.11-2.109h-1.406a.704.704 0 0 1 0-1.406Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.667 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
