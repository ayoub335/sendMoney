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
        gap: 10,
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
  return (
    <Container isWithHorizontalPadding>
      <View style={{...Flex.center, paddingTop: 40}}>
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
            {total}
            <Text type={ETextType.Heading5} color={commonColor.darkGray}>
              {'.000'}
            </Text>
          </Text>
          <Text color={commonColor.sentMoney}>Money sent</Text>
        </View>
        {separator()}
        <View style={{gap: 15}}>
          <TextValue
            isMixedText
            firstText={'Amount'}
            secondText={'.000'}
            boldSecondText={amount}
          />
          <TextValue
            isMixedText
            firstText={'Fee'}
            secondText={'.000'}
            boldSecondText={fee}
          />
          <TextValue
            isMixedText
            firstText={'Total'}
            secondText={'.000'}
            boldSecondText={total}
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
