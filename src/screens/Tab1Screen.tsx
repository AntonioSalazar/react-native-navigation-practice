import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab1 ');
  }, []);

  return (
    <View>
      <Text>Tab 1</Text>
    </View>
  );
};

export default Tab1Screen;
