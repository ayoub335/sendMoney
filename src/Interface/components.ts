import {
  ImageSourcePropType,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';
import {ETextType} from '../Enum/Enum';
import {ReactNode} from 'react';

interface IText extends TextProps {
  textStyle?: object;
  type?: ETextType;
  color?: string;
  isWithLeftIcon?: boolean;
  icon?: ReactNode;
}

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

interface IButton extends TouchableOpacityProps {
  text?: string;
}

interface IInput extends TextInputProps {
  icon?: any;
}

interface IAvatar {
  src: ImageSourcePropType;
}

interface IAmountBox {
  listOfBox: number[];
  onPress?: (value: number) => void;
  containerStyle?: Object;
}

interface IHeader {
  title: string;
  headerStyle?: Object;
}

interface IAvatarInfo {
  name: string;
  phone: string;
}

interface IBalance {
  children: React.ReactNode;
  withoutIcon?: boolean;
  bgColor?: string;
  containerStyle?: Object;
}

interface ITextValue {
  isMixedText?: boolean;
  boldSecondText?: string;
  firstText?: string;
  isBoldText?: boolean;
  secondText?: string;
}

interface INavigation {
  navigate: (page?: string, params?: object) => void;
}

interface IFooter {
  button: IButton;
  amountBox?: IAmountBox;
  isAmountBox?: boolean;
}

interface ISendMoneyTemplate extends IAmountBox {
  inputValue: string;
  onChangeInput: (e: any) => void;
  onSubmit: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  financialSummary: {
    balance: number;
    fees: number;
    total: number;
  };
  isVisibleBox: boolean;
}

export type {
  IText,
  IButton,
  IInput,
  IAvatar,
  IAmountBox,
  IHeader,
  IAvatarInfo,
  IBalance,
  ITextValue,
  INavigation,
  IFooter,
  ISendMoneyTemplate,
  IIcon,
};
