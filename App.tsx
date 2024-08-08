import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import AppNavigation from './src/Navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Flex} from './src/Assets/flex';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          ...Flex.flex1,
        }}>
        <SafeAreaView style={{...Flex.flex1}}>
          <AppNavigation />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

export default App;
