import {View} from 'react-native';
import {AppPaddingHorizontal} from '../Config/common';
import {AvatarInfo, TextWithBG, TextValue, Footer} from '../Molecules';
import {Flex} from '../Assets/flex';
import {Input, Text} from '../Atoms';
import CurrencyIcon from '../Atoms/SVG/CurrencyIcon';
import {commonColor} from '../Assets/colors';
import {ETextType} from '../Enum/Enum';
import {ISendMoneyTemplate} from '../Interface';
import {balance} from '../Data/Data';

function SendMoneyTemplate(props: Readonly<ISendMoneyTemplate>) {
  return (
    <View style={{...Flex.flex1, paddingHorizontal: AppPaddingHorizontal}}>
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          gap: 30,
          width: '100%',
          ...Flex.center,
        }}>
        <AvatarInfo name="Foulen Fouleni" phone="56****10" />
        <TextWithBG>
          <Text color={commonColor.charcoalGray}>Balance:</Text>
          <Text type={ETextType.Heading2} color={commonColor.charcoalGray}>
            {`${props.financialSummary.balance} DT`}
          </Text>
        </TextWithBG>
      </View>
      <Input
        icon={<CurrencyIcon />}
        value={props.inputValue}
        onChangeText={props.onChangeInput}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      />
      <View style={{gap: 10, paddingTop: 20}}>
        {parseInt(props.inputValue) <= 20 && (
          <TextWithBG
            bgColor={commonColor.lightGreen}
            withoutIcon
            containerStyle={{
              borderRadius: 4,
              paddingVertical: 8,
              paddingHorizontal: 6,
            }}>
            <Text type={ETextType.Heading3} color={commonColor.green}>
              dqsdqsd
            </Text>
          </TextWithBG>
        )}
        <TextValue
          firstText={'Fees:'}
          secondText={`${props.financialSummary.fees.toString()} DT`}
        />
        <TextValue
          isBoldText
          firstText={'Total:'}
          secondText={`${props.financialSummary.total.toString()} DT`}
        />
      </View>
      <Footer
        isAmountBox={props.isVisibleBox}
        button={{
          text: 'Send money',
          onPress: props.onSubmit,
          disabled:
            !props.inputValue ||
            props.inputValue === '0' ||
            balance - props.financialSummary.total < 0,
        }}
        amountBox={{listOfBox: props.listOfBox, onPress: props.onPress}}
      />
    </View>
  );
}

export default SendMoneyTemplate;
