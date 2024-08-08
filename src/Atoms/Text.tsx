import {Text as Label, TextStyle, View} from 'react-native';
import {IText} from '../Interface';
import {ETextType} from '../Enum/Enum';
import {commonColor} from '../Assets/colors';
import {FontFamily} from '../Assets/fontFamily';
import {Flex} from '../Assets/flex';

function Text(props: Readonly<IText>) {
  let textStyle = {};
  switch (props?.type) {
    case ETextType.HeadingBig:
      textStyle = {
        fontSize: 30,
        lineHeight: 30,
        ...FontFamily.ubuntuBold,
      };
      break;
    case ETextType.Heading1:
      textStyle = {
        fontSize: 24,
        lineHeight: 31,
        ...FontFamily.ubuntuBold,
      };
      break;
    case ETextType.Heading2:
      textStyle = {
        fontSize: 14,
        lineHeight: 20,
        ...FontFamily.ubuntuMedium,
      };
      break;
    case ETextType.Heading3:
      textStyle = {
        fontSize: 14,
        lineHeight: 16,
        ...FontFamily.ubuntuRegular,
      };
      break;
    case ETextType.Heading4:
      textStyle = {
        fontSize: 14,
        lineHeight: 16,
        ...FontFamily.ubuntuBold,
      };
      break;
    case ETextType.Heading5:
      textStyle = {
        fontSize: 24,
        lineHeight: 27,
        ...FontFamily.ubuntuRegular,
      };
      break;
    case ETextType.TextHeader:
      textStyle = {
        fontSize: 16,
        lineHeight: 24,
        ...FontFamily.ubuntuMedium,
      };
      break;
    case ETextType.Placeholder:
      textStyle = {
        fontSize: 28,
        lineHeight: 32,
        ...FontFamily.ubuntuMedium,
      };
      break;
    case ETextType.BigPlaceholder:
      textStyle = {
        fontSize: 40,
        lineHeight: 39,
        ...FontFamily.ubuntuBold,
      };
      break;
    default:
      textStyle = {
        fontSize: 16,
        lineHeight: 21,
        ...FontFamily.ubuntuRegular,
      };
  }
  const renderText = () => (
    <Label
      style={{
        ...textStyle,
        ...(props.textStyle as Partial<TextStyle>),
        color: props.color ? props.color : commonColor.darkGray,
      }}
      {...props}>
      {props.children}
    </Label>
  );
  if (props.isWithLeftIcon) {
    return (
      <View
        style={{
          ...Flex.row,
          ...Flex.alignItemsCenter,
          gap: 5,
        }}>
        {props.icon}
        {renderText()}
      </View>
    );
  }
  return renderText();
}

export default Text;
