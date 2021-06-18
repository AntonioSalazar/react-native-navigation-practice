import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> {}

const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.mainLayout}>
      <Text style={styles.pageTitle}>Page 3 Screen</Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('Page4Screen')}>
        <Text style={styles.mainButtonText}>Go to page 4</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page3Screen;
