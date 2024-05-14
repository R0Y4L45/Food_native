import React from 'react';
import {
  StyledView,
  StyledText,
  LocationSvg,
} from '../../../common/StyledComponents';

const HomeHeader = () => {
  return (
    <StyledView style={{borderColor:'#E4E4E4',borderWidth:1 ,borderBottomStyle:'solid',borderTopWidth: 0,borderLeftWidth: 0, borderRightWidth: 0}} className="flex flex-row justify-between mt-[30px]">
        <LocationSvg width={30} height={60} className="ml-[20px] mt-[5px]" />
        <StyledText
          style={{fontSize: 20, color: '#184639'}}
          className="mr-[20px] mt-[2px]">
          Caspian Plaza
        </StyledText>
      </StyledView>
  )
}

export default HomeHeader;
