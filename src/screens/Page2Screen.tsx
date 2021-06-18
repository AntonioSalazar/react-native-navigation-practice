import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const Page2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.mainLayout}>
      <Text style={styles.pageTitle}>Page 2 Screen</Text>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => {
          navigation.navigate('Page3Screen');
        }}>
        <Text style={styles.mainButtonText}>Go to Page 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page2Screen;
