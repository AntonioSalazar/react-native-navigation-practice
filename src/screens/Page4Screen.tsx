import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const Page4Screen = ({navigation}: Props) => {
  return (
    <View style={styles.mainLayout}>
      <Text style={styles.pageTitle}>Page 4 Screen</Text>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.mainButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page4Screen;
