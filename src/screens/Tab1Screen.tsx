import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TouchabeIcon from '../components/TouchabeIcon';

const Tab1Screen = () => {
  // useEffect(() => {
  //   console.log('tab1 ');
  // }, []);

  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.mainLayout,
        marginTop: top,
      }}>
      <Text style={styles.pageTitle}>Tab 1</Text>
      <Text>
        <TouchabeIcon iconName="airplane-outline" />
        <TouchabeIcon iconName="bicycle-outline" />
        <TouchabeIcon iconName="chatbubbles-outline" />
        <TouchabeIcon iconName="thumbs-up" />
        <TouchabeIcon iconName="logo-javascript" />
        <TouchabeIcon iconName="code-slash-sharp" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
