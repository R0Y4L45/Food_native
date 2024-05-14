import React from 'react';
import {
  StyledView,
  StyledText,
  SubscriptionSvg,
  HomeSvg,
  ScanSvg,
  HamburgerSvg,
} from '../../../common/StyledComponents';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavTabMenu = () => {
  const navigation = useNavigation();
  return (
    <StyledView style={{
      borderColor: "#ECF3F9",
      elevation: 1
    }}>
      {/* navmenu */}
      <StyledView
        style={{ backgroundColor: 'fff' }}
        className="flex flex-row justify-between">
        <TouchableOpacity onPress={() => {
          navigation.navigate('HomePage');
        }}>
          <StyledView className="mt-[15px] ml-[40px]">
            <HomeSvg className="ml-[8px]" width={20} height={30} stroke="black" />
            <StyledText
              style={{
                color: '#757575',
                fontFamily: 'Poppins-Light',
                fontWeight: 500,
              }}>
              Home
            </StyledText>
          </StyledView>
        </TouchableOpacity>
        <StyledView className="mt-[15px] ml-[20px]">
          <SubscriptionSvg
            className="ml-[24px]"
            width={30}
            height={30}
            stroke="black"
          />
          <StyledText
            style={{
              color: '#757575',
              fontFamily: 'Poppins-Light',
              fontWeight: 500,
            }}>
            Subscription
          </StyledText>
        </StyledView>
        <StyledView className="mt-[15px] ml-[30px]">
          <ScanSvg
            className=" ml-[2.5px]"
            width={30}
            height={30}
            stroke="black"
          />
          <StyledText
            style={{
              color: '#757575',
              fontFamily: 'Poppins-Light',
              fontWeight: 500,
            }}>
            Scan
          </StyledText>
        </StyledView>
        <StyledView className="mt-[15px] ml-[30px] mr-[30px]">
          <HamburgerSvg
            className="ml-[4.5px]"
            width={30}
            height={30}
            stroke="black"
          />
          <StyledText
            style={{
              color: '#757575',
              fontFamily: 'Poppins-Light',
              fontWeight: 500,
            }}>
            Menu
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default NavTabMenu;
