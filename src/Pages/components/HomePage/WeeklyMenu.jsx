import React from 'react';
import {
  StyledView,
  StyledText,
} from '../../../common/StyledComponents';

const WeeklyMenu = ({weekday,day,today}) => {
  return (
    <StyledView
      style={{
        width: 48,
        height: 98,
        backgroundColor: today ? '#66B600' : "#fff",
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 30,
        elevation: today ? 0 : 7
      }}>
      <StyledText style={{alignSelf:"center",marginTop:20,color: today ? '#fff' : "#000",}}>{weekday}</StyledText>
      <StyledText style={{alignSelf:"center",marginTop:20,color: today ? '#fff' : "#000",}}>{day}</StyledText>
    </StyledView>
  );
};

export default WeeklyMenu;
