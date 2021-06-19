import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './stackNavigation';
import SettingsScreen from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const LateralDrawer = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="StackNavigation"
        options={{title: 'Home'}}
        component={StackNavigation}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default LateralDrawer;
