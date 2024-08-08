import {StackActions, useNavigation} from '@react-navigation/native';
import {Container} from '../Atoms';
import {Header} from '../Molecules';
import {SendMoneyTemplate} from '../Template';
import {AppNavigationPages} from '../Enum/Enum';
import {INavigation} from '../Interface';
import {useState} from 'react';
import {
  handleErrorToast,
  removeLeadingZero,
  transformNumber,
} from '../Functions/Commons';
import {balance, feesPercent, maximumCapOfFees} from '../Data/Data';

function SendMoney() {
  const nav = useNavigation<INavigation>();
  const [inputValue, setInputValue] = useState('');
  const [isVisibleBox, setIsVisibleBox] = useState(true);
  const [financialSummary, setFinancialSummary] = useState({
    balance: balance,
    fees: 0,
    total: 0,
  });
  const calculateFees = (amount: number) => {
    if (amount <= 20) {
      return 0.005;
    }
    return Math.min(feesPercent * amount, maximumCapOfFees);
  };
  const onSubmit = () => {
    nav.dispatch(
      StackActions.replace(AppNavigationPages.SuccessPage, {
        amount: transformNumber(inputValue),
        total: transformNumber(financialSummary.total),
        fee: transformNumber(financialSummary.fees),
        transactionId: '841515646856',
      }),
    );
  };
  const onChangeAmountFinancialSummary = (
    amount: string,
    balance: number,
    fees: number,
    total: number,
  ) => {
    setInputValue(amount);
    setFinancialSummary({
      balance: balance,
      fees: fees,
      total: total,
    });
  };
  const onChangeInput = (amount: string) => {
    let fees = calculateFees(parseInt(amount));
    let total = fees + parseInt(amount);
    const amountLeadingZero = removeLeadingZero(amount);
    if (
      amountLeadingZero === '0' ||
      amountLeadingZero === '' ||
      amount === ''
    ) {
      onChangeAmountFinancialSummary(amountLeadingZero, balance, 0, 0);
    } else if (total > balance) {
      handleErrorToast();
      const maxAmount = calculateMaxAmount(balance, fees);
      total = maxAmount + fees;
      onChangeAmountFinancialSummary(
        maxAmount.toString(),
        balance - total,
        fees,
        total,
      );
    } else {
      onChangeAmountFinancialSummary(
        amountLeadingZero,
        balance - total,
        fees,
        total,
      );
    }
  };
  const onPressBoxAmount = (value: number) => {
    onChangeInput(value.toString());
  };
  const onBlur = () => {
    setIsVisibleBox(true);
    if (inputValue === '0') {
      setInputValue('');
    }
  };
  const onFocus = () => {
    setIsVisibleBox(false);
  };
  const calculateMaxAmount = (balance: number, fees: number) => {
    return balance - fees > 0 ? balance - fees : 0;
  };
  return (
    <Container withTopPadding withBottomPadding>
      <Header title="Send money" headerStyle={{paddingHorizontal: 16}} />
      <SendMoneyTemplate
        inputValue={inputValue}
        onChangeInput={onChangeInput}
        onSubmit={onSubmit}
        listOfBox={[10, 20, 50, 100]}
        onPress={onPressBoxAmount}
        onBlur={onBlur}
        onFocus={onFocus}
        financialSummary={financialSummary}
        isVisibleBox={isVisibleBox}
      />
    </Container>
  );
}

export default SendMoney;
