import {AppNavigationPages} from '../Enum/Enum';
import {SendMoneyRoutes} from '../Data/Data';
import {getUniqueKey} from '../Functions/Commons';
import {horizontalAnimation} from './NavigationAnimation';
import {createStackNavigator} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../Config/ToastConfig';

const Stack = createStackNavigator();
function AppNavigation() {
  return (
    <>
      <Stack.Navigator initialRouteName={AppNavigationPages.SendMoney}>
        {SendMoneyRoutes?.map(item => (
          <Stack.Screen
            key={getUniqueKey()}
            name={item?.name}
            component={item?.component}
            options={{
              header: item?.header,
              ...horizontalAnimation,
            }}
          />
        ))}
      </Stack.Navigator>
      <Toast config={toastConfig} />
    </>
  );
}

export default AppNavigation;
