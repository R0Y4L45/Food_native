import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
} from '../../../common/StyledComponents';

const FoodSets = () => {
  return (
    <StyledView
      style={{backgroundColor: '#fff', width: 210,elevation:2}}
      className="ml-[20px]">
      {/* FoodComponents for set */}
      <StyledImage
        resizeMode="cover"
        style={{width: 194, height: 144, borderRadius: 20,marginTop:20,marginBottom: 20,alignSelf:"center"}}
        source={require('../../../assets/images/lunchsets.png')}
      />
      <StyledView className="flex flex-row justify-between">
        <StyledText
          style={{fontSize: 16, fontWeight: 600, color: '#000'}}
          className="ml-[10px]">
          Lunch set
        </StyledText>
        <StyledImage
          className="mr-[20px]"
          source={require('../../../assets/images/newImage.png')}
        />
      </StyledView>
      <StyledText className="ml-[10px] mt-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipisci
      </StyledText>
      <StyledText
        style={{
          textAlign: 'right',
          marginRight: 20,
          marginTop: 10,
          marginBottom:20,
          fontSize: 14,
          color: '#42C2E5',
          fontWeight: 400,
        }}>
        from 12 AZN
      </StyledText>
    </StyledView>
  );
};

export default FoodSets;
