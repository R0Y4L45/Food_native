import React from 'react';
import {
  StyledView,
  StyledText,
  EmptyMenuSvg,
} from '../../../common/StyledComponents';

const EmptyMenu = () => {
  return (
    <StyledView className="flex justify-center mt-[150px] ml-[100px]">
      <EmptyMenuSvg />
      <StyledText
        style={{fontFamily: 'Poppins-Light', fontSize: 15, fontWeight: 500}}
        className="mt-[10px]">
        Menu will be added soon
      </StyledText>
    </StyledView>
  );
};
export default EmptyMenu;
