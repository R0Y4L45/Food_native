import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {StyledView} from '../../../common/StyledComponents';

const HomeSlider = () => {
  const Images = [
    require('../../../assets/images/deliciousimgae1.jpg'),
    require('../../../assets/images/deliciousimage2.jpg'),
    require('../../../assets/images/deliciouseimage3.jpg'),
  ];
  const sliderStyle = {
    width: 390,
    height: 188,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 15,
  };

  return (
    <StyledView>
      <SliderBox
        images={Images}
        dotColor="#FFFEFE"
        inactiveDotColor="#717171"
        paginationBoxVerticalPadding={20}
        autoplay
        autoplayInterval={9000}
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        style={sliderStyle}
      />
    </StyledView>
  );
};

export default HomeSlider;
