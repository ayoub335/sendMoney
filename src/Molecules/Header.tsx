import {View} from 'react-native';
import {Text} from '../Atoms';
import {ETextType} from '../Enum/Enum';
import {Flex} from '../Assets/Style';
import LeftArrow from '../Atoms/SVG/LeftArrow';
import {IHeader} from '../Interface';
import {commonColor} from '../Assets/colors';

function Header(props: Readonly<IHeader>) {
  return (
    <>
      <View
        style={{
          ...Flex.row,
          ...Flex.alignItemsCenter,
          ...Flex.spaceBetween,
          ...props.headerStyle,
        }}>
        <LeftArrow />
        <Text type={ETextType.TextHeader} color={commonColor.darkGray}>
          {props.title}
        </Text>
        <View />
      </View>
      <View
        style={{
          marginTop: 20,
          width: '100%',
          height: 1,
          backgroundColor: commonColor.headerBorder,
        }}
      />
    </>
  );
}

export default Header;
