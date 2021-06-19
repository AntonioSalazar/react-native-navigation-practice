import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';

const Tab2Screen = () => {
  useEffect(() => {
    console.log('tab2 ');
  }, []);
  return (
    <View>
      <Text>Tab 2</Text>
    </View>
  );
};

export default Tab2Screen;
