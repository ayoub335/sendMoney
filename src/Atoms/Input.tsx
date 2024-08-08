import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Flex} from '../Assets/flex';
import {commonColor} from '../Assets/colors';
import {FontFamily} from '../Assets/fontFamily';
import {IInput} from '../Interface';
import {Text} from '.';
import {ETextType} from '../Enum/Enum';

function Input(props: Readonly<IInput>) {
  const [isFocused, setIsFocused] = useState(false);
  const {value, placeholder, icon, ...rest} = props;

  return (
    <View
      style={[
        {
          ...Flex.row,
          ...Flex.spaceBetween,
          ...Flex.alignItemsCenter,
          borderWidth: 2,
          borderColor: commonColor.lightGray,
          padding: 16,
          borderRadius: 8,
        },
        isFocused && {borderColor: commonColor.borderOrange},
      ]}>
      {icon}
      <View
        style={{
          flex: 1,
          position: 'relative',
        }}>
        {!isFocused && !value && (
          <View
            style={{
              position: 'absolute',
              ...Flex.row,
              ...Flex.alignItemsCenter,
              ...Flex.justifyEnd,
              height: '100%',
              alignItems: 'center',
              right: 0,
              zIndex: 0,
            }}>
            <Text
              type={ETextType.BigPlaceholder}
              color={commonColor.placeholder}>
              0
            </Text>
            <Text type={ETextType.Placeholder} color={commonColor.placeholder}>
              .000
            </Text>
          </View>
        )}
        <TextInput
          {...rest}
          value={value}
          placeholder=""
          placeholderTextColor={commonColor.lightGray}
          onFocus={e => {
            setIsFocused(true);
            props?.onFocus?.(e);
          }}
          onBlur={e => {
            setIsFocused(false);
            props?.onBlur?.(e);
          }}
          style={{
            height: 73,
            ...Flex.flexGrow1,
            ...FontFamily.ubuntuMedium,
            fontSize: 40,
            lineHeight: 30,
            textAlign: 'right',
            color: 'black',
            zIndex: 1,
          }}
        />
      </View>
    </View>
  );
}

export default Input;
