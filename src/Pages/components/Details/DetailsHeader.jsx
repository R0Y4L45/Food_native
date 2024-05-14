import React from 'react';
import {
  StyledView,
  StyledText,
  Backsvg,
  ErrorDetSvg,
  StyledButton,
  StyledInput,
  StyledImage,
  SuccesfullSvg,
} from '../../../common/StyledComponents';
import {ImageBackground, StyleSheet} from 'react-native';

const DetailsHeader = ({complated}) => {
  return (
    <ImageBackground
      style={{flex: 0, height: 400}}
      source={complated ? require('../../../assets/images/ellipsdetails.png') : require('../../../assets/images/erroreliips.png')}>
      <StyledView className="flex flex-row mt-[50px] mb-[20px] justify-between">
        <Backsvg className="ml-[20px]" />
        <StyledText style={{fontSize: 20, fontWeight: 500, color: '#fff'}}>
          Transfer details
        </StyledText>
        <StyledView className="mr-[30px]"></StyledView>
      </StyledView>
      <StyledView style={{alignSelf: 'center', marginTop: 20}}>
        {
          complated ?<SuccesfullSvg  /> : <ErrorDetSvg/>
        }
      </StyledView>
      <StyledText
        style={{
          fontSize: 20,
          fontWeight: 600,
          marginTop: 20,
          color: '#fff',
          alignSelf: 'center',
        }}>
        Successful!
      </StyledText>
    </ImageBackground>
  );
};

export default DetailsHeader;
