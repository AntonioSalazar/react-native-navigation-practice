import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';

import Icon from 'react-native-vector-icons/Ionicons';

import StackNavigation from './stackNavigation';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TopTabNavigator from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'basketball-outline';
              break;

            case 'Tab2Screen':
              iconName = 'albums-outline';
              break;
            case 'StackNavigation':
              iconName = 'bulb-outline';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigation"
        options={{title: 'Tab 3'}}
        component={StackNavigation}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {fontSize: 15},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigation':
              iconName = 'ST';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigation"
        options={{title: 'Tab 3'}}
        component={StackNavigation}
      />
    </BottomTabIOS.Navigator>
  );
};
