import React from 'react';
import {
  StyledView,
  StyledText,
  Leftarrow,
  SearchSvg,
} from '../../../common/StyledComponents';


const TodaysMenuHeader = () => {
  return (
    <StyledView
        style={{backgroundColor: '#fff'}}
        className="flex flex-row justify-between mt-[30px] ml-[20px] mr-[10px]">
        <Leftarrow width={50} height={50} stroke="black" />
        <StyledText
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#414141',
          }}>
          12 January 2023
        </StyledText>
        <SearchSvg width={50} height={50} stroke="green" />
      </StyledView>
  )
  }
export default TodaysMenuHeader;