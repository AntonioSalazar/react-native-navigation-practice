import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab1 ');
  }, []);

  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.mainLayout,
        marginTop: top,
      }}>
      <Text style={styles.pageTitle}>Tab 1</Text>
      <Text>
        <Icon name="airplane-outline" size={40} color={colors.primary} />
        <Icon name="bicycle-outline" size={40} color={colors.primary} />
        <Icon name="chatbubbles-outline" size={40} color={colors.primary} />
        <Icon name="thumbs-up" size={40} color={colors.primary} />
        <Icon name="logo-javascript" size={40} color={colors.primary} />
        <Icon name="code-slash-sharp" size={40} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
