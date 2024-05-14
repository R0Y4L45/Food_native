import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledImage,
} from '../../common/StyledComponents';

import EmptyMenu from '../components/TodaysMenu/EmptyMenu';
import NavTabmenu from '../components/TodaysMenu/NavTabMenu';
import TodaysMenuHeader from '../components/TodaysMenu/TodaysMenuHeader';
import ScrolledNav from '../components/TodaysMenu/ScrolledNav';

const TodaysMenu = () => {
  return (
    <StyledView>
      {/* header */}
      <TodaysMenuHeader/>

      {/* scrollednav */}
      <ScrolledNav/>

      {/* main */}
      <StyledScrollView
        style={{backgroundColor: '#F8F8F8'}}
        className="px-5  w-full h-[68.5%]">
        {/* components */}
        <StyledView>
          <StyledText
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: 20,
              fontWeight: 'bold',
            }}
            className="mt-[20px]">
            Salads
          </StyledText>
          <StyledView className="flex flex-row mt-[20px]">
            <StyledImage
              style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
              source={require('../../assets/images/salad.png')}
            />
            <StyledView
              style={{
                backgroundColor: '#fff',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
              className="flex flex-col w-[240px]">
              <StyledView className="flex flex-row justify-between mt-[10px] ">
                <StyledText
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#184639',
                  }}
                  className="ml-[20px] font-bold">
                  Vegeterian bowl
                </StyledText>
                <StyledImage
                  className="mr-[20px]"
                  source={require('../../assets/images/newImage.png')}
                />
              </StyledView>
              <StyledText
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: 13,
                  fontWeight: 'normal',
                }}
                className="mt-[20px] mb-[20px] ml-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipisci
              </StyledText>
              <StyledView className="flex flex-row justify-between">
                <StyledText
                  style={{
                    fontFamily: 'Poppins-Light',
                    color: '#FF8C03',
                    fontWeight: 700,
                  }}
                  className="ml-[20px]">
                  4 items left
                </StyledText>
                <StyledText
                  style={{
                    fontFamily: 'Poppins-Light',
                    color: '#42C2E5',
                    fontWeight: 700,
                  }}
                  className="mr-[20px]">
                  12 AZN
                </StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>

        {/* emptymenu */}
        {/* <EmptyMenu/> */}
        
      </StyledScrollView>

      {/* vieworder */}
      <StyledView
        style={{backgroundColor: '#F8F8F8'}}
        className="pl-[20px] pr-[20px]">
        <StyledView
          style={{
            borderColor: '#FF8C03',
            borderWidth: 1,
            borderStyle: 'dotted',
            borderRadius: 10,
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#fff',
          }}
          className="flex flex-row justify-between ">
          <StyledView className="flex flex-row">
            <StyledText
              style={{borderWidth: 1, color: '#FF8C03', fontWeight: 500}}
              className="border rounded-[10px] p-[5px] pl-[10px] pr-[10px] border-yellow-500">
              2x
            </StyledText>
            <StyledText
              style={{color: '#FF8C03', fontWeight: 500}}
              className="p-[5px]">
              View order
            </StyledText>
          </StyledView>
          <StyledText
            style={{color: '#000', fontWeight: 700, fontSize: 15}}
            className="p-[5px] font-bold">
            $ 10.90
          </StyledText>
        </StyledView>
      </StyledView>

      {/* navmenu */}
      <NavTabmenu />
    </StyledView>
  );
};

export default TodaysMenu;
