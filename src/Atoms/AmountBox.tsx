import {Pressable, View} from 'react-native';
import {Text} from '.';
import {commonColor} from '../Assets/colors';
import {Flex} from '../Assets/flex';
import {IAmountBox} from '../Interface';
import {useState} from 'react';

function AmountBox(props: Readonly<IAmountBox>) {
  const [pressedBoxIndex, setPressedBoxIndex] = useState<number>();
  const renderListOfPressableBox = () => {
    return props.listOfBox.map((item, index) => {
      const colorCondition = index === pressedBoxIndex;
      return (
        <Pressable
          key={index}
          onPress={() => {
            setPressedBoxIndex(index);
            props?.onPress?.(item);
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            ...Flex.alignSelfStart,
            borderWidth: 2,
            borderRadius: 30,
            backgroundColor: colorCondition
              ? commonColor.lightOrange
              : commonColor.white,
            borderColor: colorCondition
              ? commonColor.borderOrange
              : commonColor.lightGray,
          }}>
          <Text>{item.toString()}</Text>
        </Pressable>
      );
    });
  };

  return (
    <View
      style={{
        ...Flex.row,
        ...Flex.alignItemsCenter,
        ...Flex.spaceBetween,
        ...props?.containerStyle,
      }}>
      {renderListOfPressableBox()}
    </View>
  );
}

export default AmountBox;
