/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/modules';


const App = () => {
  const store = createStore(rootReducer);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  );
};


export default App;
