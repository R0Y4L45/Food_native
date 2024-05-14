import React, {useState} from 'react';
import {
  StyledView,
  StyledText,
  CloseSvg,
  StyledButton,
  StyledInput,
  StyledImage,
} from '../../../common/StyledComponents';
const AddReview = () => {
  const [defRaiting, setDefRaiting] = useState(2);
  const [maxraiting, setMaxRaiting] = useState([1, 2, 3, 4, 5]);
  const starIconFull =
    'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
  const starIconEmpty =
    'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';

  return (
    <StyledView style={{backgroundColor:"#FFF", elevation: 1,}} className="m-[10px] rounded-[8px]">
      <CloseSvg style={{flex: 1, alignSelf: 'flex-end', margin: 10}} />
      <StyledText style={{fontSize: 18, color: '#FE724C', marginLeft: 10}}>
        Add your review
      </StyledText>
      <StyledText style={{fontSize: 14, color: '#A2A2A2', marginLeft: 10}}>
        Sezar salad, sandwich
      </StyledText>
      <StyledView className="flex flex-row justify-center mt-[20px]">
        {maxraiting.map((item, key) => {
          return (
            <StyledButton
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefRaiting(item)}>
              <StyledImage
                style={{width: 40, height: 40, resizeMode: 'cover'}}
                source={
                  item <= defRaiting
                    ? {uri: starIconFull}
                    : {uri: starIconEmpty}
                }
              />
            </StyledButton>
          );
        })}
      </StyledView>
      <StyledInput
        placeholder="Write your review"
        style={{
          height: 100,
          backgroundColor: '#FFF',
          margin: 10,
          borderColor:"#EDEDED",
          elevation: 5,
          borderRadius: 10,
          marginRight: 20,
          marginLeft: 20,
          marginTop: 20,
          padding: 10,
        }}></StyledInput>
      <StyledButton
        style={{backgroundColor: '#FF8C03',alignItems: 'center',}}
        className="ml-[100px] mr-[100px] mt-[10px] mb-[20px] p-[10px] rounded-[20px]">
        <StyledText style={{color:"#FFF"}}>Send</StyledText>
      </StyledButton>
    </StyledView>
  );
};

export default AddReview;
