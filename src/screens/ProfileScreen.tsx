import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from 'react';
import {RootStackParams} from '../navigation/stackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'> {}

const ProfileScreen = ({navigation, route}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.pageTitle}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default ProfileScreen;
