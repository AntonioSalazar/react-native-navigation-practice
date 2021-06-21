import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stackNavigation';
import LateralDrawer from './src/navigation/LateralMenu';
import CustomLateralMenu from './src/navigation/CustomLateralMenu';
import AuthProvider from './src/context/AuthContext';
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <LateralDrawer /> */}
      <AuthProvider>
        <CustomLateralMenu />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
