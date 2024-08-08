import {Image, View} from 'react-native';
import {IAvatar} from '../Interface';

function Avatar(props: Readonly<IAvatar>) {
  return (
    <View style={{width: 72, height: 72, borderRadius: 72 / 2}}>
      <Image
        source={props.src}
        style={{width: 72, height: 72, borderRadius: 72 / 2}}
      />
    </View>
  );
}

export default Avatar;
