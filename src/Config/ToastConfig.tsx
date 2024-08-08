import {Pressable, View} from 'react-native';
import {Text} from '../Atoms';
import {commonColor} from '../Assets/colors';
import {Flex} from '../Assets/flex';
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
          width: '100%',
          height: 56,
          borderRadius: 8,
          padding: 12,
          backgroundColor: commonColor.white,
          ...Flex.row,
          ...Flex.alignItemsCenter,
          ...Flex.spaceBetween,
        }}>
        <RedX />
        <Text>{props.text1}</Text>
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
