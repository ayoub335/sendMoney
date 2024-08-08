import {View} from 'react-native';
import {commonColor} from '../Assets/colors';
import Wallet from '../Atoms/SVG/Wallet';
import {IBalance} from '../Interface';
import {Flex} from '../Assets/Style';

function TextWithBG(props: Readonly<IBalance>) {
  return (
    <View
      style={{
        ...Flex.row,
        ...Flex.alignItemsCenter,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        backgroundColor: props?.bgColor
          ? props?.bgColor
          : commonColor.lightGray,
        gap: 8,
        ...props.containerStyle,
      }}>
      {!props.withoutIcon && <Wallet />}
      {props.children}
    </View>
  );
}

export default TextWithBG;
