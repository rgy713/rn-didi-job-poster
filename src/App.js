import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import RootRoutes from './navigator/RootRoutes';
import store from './store/app.store';
import {ThemeContextProvider} from './store/contexts/ThemeContext';

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeContextProvider value={{color: 'white'}}>
        <StatusBar backgroundColor={'white'} barStyle="light-content" />
        <RootRoutes />
      </ThemeContextProvider>
    </StoreProvider>
  );
};

export default App;
