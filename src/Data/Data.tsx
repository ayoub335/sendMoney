import {AppNavigationPages} from '../Enum/Enum';
import {SendMoney, SuccessPage} from '../Pages';

const SendMoneyRoutes = [
  {
    name: AppNavigationPages.SendMoney,
    component: SendMoney,
    header: () => null,
  },
  {
    name: AppNavigationPages.SuccessPage,
    component: SuccessPage,
    header: () => null,
  },
];

const balance = 2500;

const maximumCapOfFees = 3;

const feesPercent = 0.01;

export {SendMoneyRoutes, balance, maximumCapOfFees, feesPercent};
