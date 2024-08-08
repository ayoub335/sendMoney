import {View} from 'react-native';
import {Flex} from '../Assets/flex';
import {AmountBox, Button} from '../Atoms';
import {IFooter} from '../Interface';

function Footer(props: Readonly<IFooter>) {
  return (
    <View
      style={{
        ...Flex.flexGrow1,
        ...Flex.justifyEnd,
        gap: 50,
        paddingBottom: 30,
      }}>
      {props?.isAmountBox && props.amountBox && (
        <AmountBox {...props.amountBox} />
      )}
      <Button {...props.button} />
    </View>
  );
}

export default Footer;
