import {View} from 'react-native';
import {Avatar, Container, Text} from '../Atoms';
import GreenCheck from '../Atoms/SVG/GreenCheck';
import {AppNavigationPages, ETextType} from '../Enum/Enum';
import {commonColor} from '../Assets/colors';
import {Flex} from '../Assets/Style';
import {Footer, TextValue} from '../Molecules';
import CurrencyIcon from '../Atoms/SVG/CurrencyIcon';
import {StackActions, useNavigation} from '@react-navigation/native';
import {INavigation} from '../Interface';

function SuccessPage({route}: any) {
  const {amount, fee, total, transactionId} = route.params;
  const totalParts = total?.split('.');
  const amountParts = amount?.split('.');
  const feesParts = fee?.split('.');
  const nav = useNavigation<INavigation>();
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
  const financialSummaryList = [
    {
      firstText: 'Amount',
      secondText: `.${amountParts[1]}`,
      boldSecondText: amountParts[0],
    },
    {
      firstText: 'Fee',
      secondText: `.${feesParts[1]}`,
      boldSecondText: feesParts[0],
    },
    {
      firstText: 'Total',
      secondText: `.${totalParts[1]}`,
      boldSecondText: totalParts[0],
    },
  ];
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

  const commonSecondTextProps = {
    isWithLeftIcon: true,
    icon: renderModifiedCurrencyIcon(10, 10),
    textStyle: {paddingTop: 3},
  };
  const onPressDone = () => {
    nav.dispatch(StackActions.replace(AppNavigationPages.SendMoney));
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
          {financialSummaryList.map((item, index) => (
            <TextValue
              key={index}
              secondTextProps={commonSecondTextProps}
              isMixedText
              {...item}
            />
          ))}
        </View>
        {separator()}
        <TextValue
          isBoldText
          firstText={'Transaction ID'}
          secondText={transactionId}
        />
      </View>
      <Footer button={{text: 'Done', onPress: onPressDone}} />
    </Container>
  );
}

export default SuccessPage;
