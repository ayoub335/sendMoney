import {Pressable, View} from 'react-native';
import {Text} from '../Atoms';
import {commonColor} from '../Assets/colors';
import {Flex, Shadow} from '../Assets/Style';
import RedX from '../Atoms/SVG/RedX';
import Close from '../Atoms/SVG/Close';
import Toast from 'react-native-toast-message';

export const toastConfig = {
  errorToast: (props: any) => (
    <View
      style={{
        width: '100%',
        height: 56,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          ...Shadow.primary,
          width: '100%',
          height: 56,
          borderRadius: 8,
          padding: 12,
          backgroundColor: commonColor.white,
          ...Flex.row,
          ...Flex.alignItemsCenter,
          ...Flex.spaceBetween,
        }}>
        <View
          style={{
            ...Flex.row,
            ...Flex.alignItemsCenter,
            gap: 10,
          }}>
          <RedX />
          <Text>{props.text1}</Text>
        </View>
        <Pressable
          onPress={() => {
            Toast.hide();
          }}>
          <Close />
        </Pressable>
      </View>
    </View>
  ),
};
