import {TouchableOpacity, View} from 'react-native';
import {Flex} from '../Assets/flex';
import {commonColor} from '../Assets/colors';
import {Text} from '.';
import {ETextType} from '../Enum/Enum';
import {IButton} from '../Interface';

function Button(props: Readonly<IButton>) {
  const commonType = {
    width: '100%',
    ...Flex.center,
    borderRadius: 8,
    paddingVertical: 15,
  };
  let containerClassName = {};
  let textColor: string;
  if (props?.disabled) {
    containerClassName = {
      backgroundColor: commonColor.lightGray,
      ...commonType,
    };
    textColor = commonColor.grayLabel;
  } else {
    containerClassName = {
      backgroundColor: commonColor.orange,
      ...commonType,
    };
    textColor = commonColor.white;
  }
  console.log('containerClassName', containerClassName);

  return (
    <TouchableOpacity {...props} disabled={props.disabled}>
      <View style={{...containerClassName}}>
        <Text
          type={ETextType.TextHeader}
          textStyle={{textAlign: 'center'}}
          color={textColor}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
