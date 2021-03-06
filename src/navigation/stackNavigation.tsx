import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import Page4Screen from '../screens/Page4Screen';
import ProfileScreen from '../screens/ProfileScreen';

export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  Page4Screen: undefined;
  ProfileScreen: {
    id: number;
    name: string;
    age: number;
  };
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Pagina 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Pagina 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Pagina 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="Page4Screen"
        options={{title: 'Pagina 4'}}
        component={Page4Screen}
      />

      <Stack.Screen
        name="ProfileScreen"
        options={{title: ''}}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
