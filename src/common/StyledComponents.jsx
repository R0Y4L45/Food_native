import {Text, View, Image, ScrollView,
   TextInput,TouchableOpacity} from 'react-native';
import {styled} from 'nativewind';
import Leftarrow from '../assets/svg/LeftArrow';
import SearchSvg from '../assets/svg/SearchSvg';
import SubscriptionSvg from '../assets/svg/SubscriptionSvg';
import HomeSvg from '../assets/svg/HomeSvg';
import HamburgerSvg from '../assets/svg/HamburgerSvg';
import ScanSvg from '../assets/svg/ScanSvg';
import EmptyMenuSvg from '../assets/svg/EmptyMenuSvg';
import LocationSvg from '../assets/svg/LocationSvg';
import CloseSvg from '../assets/svg/CloseSvg';
import Backsvg from '../assets/svg/BackSvg'
import SuccesfullSvg from '../assets/svg/SuccesfullSvg';
import InvoiceSvg from '../assets/svg/InvoiceSvg'
import ErrorDetSvg from '../assets/svg/ErrorDetSvg'

export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledInput = styled(TextInput);
export const StyledButton = styled(TouchableOpacity);
export const StyledScrollView = styled(ScrollView);
export const StyledImage = styled(Image);
export {Leftarrow,SearchSvg,SubscriptionSvg,HomeSvg,
  ScanSvg,HamburgerSvg,EmptyMenuSvg,LocationSvg,CloseSvg,
  Backsvg,SuccesfullSvg,InvoiceSvg,ErrorDetSvg
};
