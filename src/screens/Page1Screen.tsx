import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.mainLayout}>
      <Text style={styles.pageTitle}>Page 1 Screen</Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('Page2Screen')}>
        <Text style={styles.mainButtonText}>Go to Page 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1Screen;
