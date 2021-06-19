import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stackNavigation';
import LateralDrawer from './src/navigation/LateralMenu';
import CustomLateralMenu from './src/navigation/CustomLateralMenu';
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <LateralDrawer /> */}
      <CustomLateralMenu />
    </NavigationContainer>
  );
};

export default App;
