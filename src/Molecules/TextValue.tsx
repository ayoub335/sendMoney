import {View} from 'react-native';
import {Flex} from '../Assets/flex';
import {ITextValue} from '../Interface';
import {Text} from '../Atoms';
import {ETextType} from '../Enum/Enum';
import {commonColor} from '../Assets/colors';

function TextValue(props: Readonly<ITextValue>) {
  const renderValue = () => {
    if (props.isMixedText) {
      return (
        <>
          <Text type={ETextType.Heading4} color={commonColor.mediumGray}>
            {props.firstText}
          </Text>
          <Text
            {...props?.secondTextProps}
            type={ETextType.Heading2}
            color={commonColor.darkGray}>
            {props.boldSecondText}
            <Text type={ETextType.Heading3} color={commonColor.darkGray}>
              {props.secondText}
            </Text>
          </Text>
        </>
      );
    }
    if (props.isBoldText) {
      return (
        <>
          <Text type={ETextType.Heading4} color={commonColor.charcoalGray}>
            {props.firstText}
          </Text>
          <Text
            {...props?.secondTextProps}
            type={ETextType.TextHeader}
            color={commonColor.darkGray}>
            {props.secondText}
          </Text>
        </>
      );
    }
    return (
      <>
        <Text color={commonColor.charcoalGray}>{props.firstText}</Text>
        <Text {...props?.secondTextProps} color={commonColor.charcoalGray}>
          {props.secondText}
        </Text>
      </>
    );
  };
  return (
    <View
      style={{
        ...Flex.row,
        ...Flex.spaceBetween,
        ...Flex.alignItemsCenter,
      }}>
      {renderValue()}
    </View>
  );
}

export default TextValue;
