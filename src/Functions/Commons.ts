import Toast from 'react-native-toast-message';

const getUniqueKey = () => {
  return new Date().getTime();
};

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

export {getUniqueKey, handleErrorToast, removeLeadingZero};
