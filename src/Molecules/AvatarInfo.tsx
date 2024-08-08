import {View} from 'react-native';
import {Flex} from '../Assets/flex';
import {Avatar, Text} from '../Atoms';
import {ETextType} from '../Enum/Enum';
import {commonColor} from '../Assets/colors';
import {IAvatarInfo} from '../Interface';

function AvatarInfo(props: Readonly<IAvatarInfo>) {
  return (
    <View
      style={{
        ...Flex.row,
        ...Flex.alignItemsCenter,
        gap: 10,
      }}>
      <Avatar src={require('../Assets/Images/avatar.png')} />
      <View style={{...Flex.center, gap: 10}}>
        <Text type={ETextType.TextHeader} color={commonColor.darkGray}>
          {props.name}
        </Text>
        <Text color={commonColor.charcoalGray}>{props.phone}</Text>
      </View>
    </View>
  );
}

export default AvatarInfo;
