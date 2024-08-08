import {View} from 'react-native';
import {Avatar, Container, Text} from '../Atoms';
import GreenCheck from '../Atoms/SVG/GreenCheck';
import {ETextType} from '../Enum/Enum';
import {commonColor} from '../Assets/colors';
import {Flex} from '../Assets/flex';
import {Footer, TextValue} from '../Molecules';
import CurrencyIcon from '../Atoms/SVG/CurrencyIcon';

function SuccessPage({route}: any) {
  const {amount, fee, total, transactionId} = route.params;
  const separator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: commonColor.borderSuccess,
        width: '100%',
        paddingHorizontal: 10,
      }}
    />
  );
  const renderModifiedCurrencyIcon = (width: number, height: number) => (
    <View
      style={{
        ...Flex.row,
        ...Flex.alignItemsCenter,
        gap: 5,
      }}>
      <Text type={ETextType.Heading1} color={commonColor.darkGray}>
        -
      </Text>
      <CurrencyIcon
        color={commonColor.darkGray}
        width={width}
        height={height}
      />
    </View>
  );
  const totalParts = total?.split('.');
  const amountParts = amount?.split('.');
  const feesParts = fee?.split('.');
  const commonSecondTextProps = {
    isWithLeftIcon: true,
    icon: renderModifiedCurrencyIcon(10, 10),
    textStyle: {paddingTop: 3},
  };
  return (
    <Container isWithHorizontalPadding>
      <View style={{...Flex.center, paddingVertical: 40}}>
        <GreenCheck />
        <Text type={ETextType.Heading1} color={commonColor.darkGray}>
          Transaction completed
        </Text>
      </View>
      <View
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: commonColor.borderSuccess,
          borderRadius: 12,
          gap: 20,
        }}>
        <View style={{...Flex.center, gap: 15}}>
          <Avatar src={require('../Assets/Images/avatar.png')} />
          <Text
            type={ETextType.HeadingBig}
            color={commonColor.darkGray}
            isWithLeftIcon
            textStyle={{paddingTop: 4}}
            icon={renderModifiedCurrencyIcon(18, 20)}>
            {totalParts[0]}
            <Text type={ETextType.Heading5} color={commonColor.darkGray}>
              {`.${totalParts[1]}`}
            </Text>
          </Text>
          <Text color={commonColor.sentMoney}>Money sent</Text>
        </View>
        {separator()}
        <View style={{gap: 15}}>
          <TextValue
            secondTextProps={commonSecondTextProps}
            isMixedText
            firstText={'Amount'}
            secondText={`.${amountParts[1]}`}
            boldSecondText={amountParts[0]}
          />
          <TextValue
            secondTextProps={commonSecondTextProps}
            isMixedText
            firstText={'Fee'}
            secondText={`.${feesParts[1]}`}
            boldSecondText={feesParts[0]}
          />
          <TextValue
            secondTextProps={commonSecondTextProps}
            isMixedText
            firstText={'Total'}
            secondText={`.${totalParts[1]}`}
            boldSecondText={totalParts[0]}
          />
        </View>
        {separator()}
        <TextValue
          isBoldText
          firstText={'Transaction ID'}
          secondText={transactionId}
        />
      </View>
      <Footer button={{text: 'Done'}} />
    </Container>
  );
}

export default SuccessPage;
