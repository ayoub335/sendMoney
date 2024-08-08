import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import {useRef} from 'react';
import {Flex} from '../Assets/flex';
import {AppPaddingHorizontal} from '../Config/common';
import {commonColor} from '../Assets/colors';

interface IContainer {
  isWithHorizontalPadding?: boolean;
  withBottomPadding?: boolean;
  style?: any;
  containerStyle?: any;
  children: React.ReactNode;
  isToEndFunc?: boolean;
  stylePositionToEnd?: StyleProp<ViewStyle>;
  withTopPadding?: boolean;
}

function Container(props: Readonly<IContainer>) {
  const containerRef = useRef<any>();
  const withHorizontalPadding = props.isWithHorizontalPadding
    ? {paddingHorizontal: AppPaddingHorizontal}
    : {};
  const withBottomPadding = props.withBottomPadding ? {paddingBottom: 22} : {};
  const withTopPadding = props.withTopPadding ? {paddingTop: 22} : {};
  return (
    <ScrollView
      ref={containerRef}
      style={{...Flex.flex1, ...props.style}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        ...withTopPadding,
        ...Flex.flexGrow1,
        ...withHorizontalPadding,
        ...withBottomPadding,
        backgroundColor: commonColor.white,
        ...props.containerStyle,
      }}
      scrollEventThrottle={16}
      keyboardShouldPersistTaps="handled">
      <View style={{...Flex.flex1}}>{props.children}</View>
    </ScrollView>
  );
}

export default Container;
