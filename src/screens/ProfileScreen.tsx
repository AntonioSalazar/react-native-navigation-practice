import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect, useContext} from 'react';
import {RootStackParams} from '../navigation/stackNavigation';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'> {}

const ProfileScreen = ({route}: Props) => {
  const {changeUserName, authState} = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    changeUserName(params.name);
  }, [params.name]);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.pageTitle}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default ProfileScreen;
