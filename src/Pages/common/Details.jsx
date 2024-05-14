import React from 'react';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledButton,
  StyledImage,
  InvoiceSvg,
} from '../../common/StyledComponents';
import DetailsHeader from '../components/Details/DetailsHeader';

const Details = () => {
  return (
    <StyledView style={{flex: 1,backgroundColor:"#FAFAFA"}}>
      {/* Details Header */}
      <DetailsHeader complated={true}/>

      {/* abot details */}
      <StyledView className='flex flex-row justify-around mt-[50px]' style={{ marginBottom: 100 }}>
        <StyledView>
            <StyledText className='mt-[10px]'>Transaction ID</StyledText>
            <StyledText className='mt-[10px]'>Purchase date</StyledText>
            <StyledText className='mt-[10px]'>Card number</StyledText>
            <StyledText className='mt-[10px]'>Amount</StyledText>
        </StyledView>

        <StyledView>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141"}} className='mt-[10px] text-right'>12345678</StyledText>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141"}} className='mt-[10px] text-right'>21.05.23, 12:32</StyledText>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141"}} className='mt-[10px] text-right'>41694455****7754</StyledText>
            <StyledText style={{fontSize:14,fontWeight:400,color:"#414141"}} className='mt-[10px] text-right'>$40</StyledText>
        </StyledView>
      </StyledView>

      {/* buttons*/}
      <StyledView style={{position: 'absolute', bottom: 0, left: 0, right: 0, }}>
        <StyledButton style={{backgroundColor:"#fff" ,borderColor:"#66B600",borderWidth: 1}} className='flex flex-row justify-center p-[20px] ml-[20px] mr-[20px] mb-[10px] rounded-[40px]'><InvoiceSvg/><StyledText> View your invoice</StyledText></StyledButton>
        <StyledButton style={{backgroundColor:"#66B600" ,borderColor:"#66B600",borderWidth: 1}} className='flex flex-row justify-center p-[20px] ml-[20px] mr-[20px] mb-[10px] rounded-[40px]'><StyledText>Back to homepage</StyledText></StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default Details;
