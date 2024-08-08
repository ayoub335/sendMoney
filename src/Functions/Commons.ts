import Toast from 'react-native-toast-message';

const handleErrorToast = () => {
  Toast.show({
    type: 'errorToast',
    text1: 'dsdsdsd55555',
    position: 'top',
    props: {
      text2NumberOfLines: 2,
    },
  });
};

const removeLeadingZero = (text: string) => {
  if (text.startsWith('0') && text?.length >= 2) {
    text = text.replace(/^0+/, '');
  }
  return text;
};

function transformNumber(input?: number | string) {
  if (input === undefined || input === null || input.toString() === '') {
    return '';
  }
  input = typeof input === 'string' ? parseInt(input) : input;
  const formatter = new Intl.NumberFormat('en', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
  return formatter.format(input);
}

export {handleErrorToast, removeLeadingZero, transformNumber};
