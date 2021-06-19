import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';

const Tab3Screen = () => {
  useEffect(() => {
    console.log('tab3');
  }, []);

  return (
    <View>
      <Text>Tab 3</Text>
    </View>
  );
};

export default Tab3Screen;
