import React from 'react';
import {
  StyledView,
  StyledText,
  StyledImage,
} from '../../../common/StyledComponents';

const TopSales = () => {
  return (
    <StyledView
      style={{
        backgroundColor: '#fff',
        height: 270,
        elevation: 2,
        marginLeft: 20,
        marginBottom:20,
        borderRadius: 20,
      }}>
      <StyledImage
        resizeMethod="cover"
        style={{
          width: 250,
          height: 150,
          borderRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        source={require('../../../assets/images/topsalesfood.jpg')}
      />
      <StyledView className="flex flex-row justify-between mt-[10px]">
        <StyledText
          style={{fontSize: 16, fontWeight: 'bold'}}
          className="ml-[10px]">
          Vegeterian bowl
        </StyledText>
        <StyledImage
          className="mr-[10px]"
          source={require('../../../assets/images/newImage.png')}
        />
      </StyledView>
      <StyledText
        style={{fontSize: 16, fontWeight: 600}}
        className="ml-[10px] w-[200px]">
        Lorem ipsum dolor sit amet, consectetur adipisci
      </StyledText>
      <StyledText
        style={{
          textAlign: 'right',
          marginRight: 20,
          marginTop: 10,
          marginBottom:20,
          fontSize: 16,
          color: '#42C2E5',
          fontWeight: 700,
        }}>
        from 12 AZN
      </StyledText>
    </StyledView>
  );
};

export default TopSales;
