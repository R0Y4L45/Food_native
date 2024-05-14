import React from 'react';
import {
  StyledScrollView,
  StyledText,
} from '../../../common/StyledComponents';

const ScrolledNav = () => {
  return (
    <StyledScrollView style={{borderColor:'#E4E4E4',borderWidth:1 ,borderBottomStyle:'solid',borderTopWidth: 0,borderLeftWidth: 0, borderRightWidth: 0,}} horizontal={true} className="flex flex-row h-[30px]">
        <StyledText
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 15,
            fontWeight: 'bold',
            color: '#B7B7B7',
          }}
          className="mt-[5px] ml-[20px] mr-[20px]">
          All
        </StyledText>
        <StyledText
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 15,
            fontWeight: 'bold',
            color: '#B7B7B7',
          }}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Desserts
        </StyledText>
        <StyledText
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 15,
            fontWeight: 'bold',
            color: '#B7B7B7',
          }}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Salads
        </StyledText>
        <StyledText
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 15,
            fontWeight: 'bold',
            color: '#B7B7B7',
          }}
          className="mt-[5px] ml-[20px] mr-[20px]">
          Burgers
        </StyledText>
        <StyledText
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 15,
            fontWeight: 'bold',
            color: '#B7B7B7',
          }}
          className="mt-[5px] ml-[10px] mr-[10px]">
          Chicken
        </StyledText>
      </StyledScrollView>
  )
}

export default ScrolledNav;
