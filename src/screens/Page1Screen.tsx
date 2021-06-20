// import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        // <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
        <Icon
          name="save-outline"
          size={30}
          color={colors.primary}
          onPress={() => navigation.toggleDrawer()}
          style={styles.menuBtn}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.pageTitle}>Page 1 Screen</Text>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('Page2Screen')}>
        <Text style={styles.mainButtonText}>Go to Page 2</Text>
      </TouchableOpacity>

      <Text style={styles.pageTitle}>Sending arguments between screen</Text>

      <TouchableOpacity
        style={{
          ...styles.mainButton,
          backgroundColor: 'green',
          marginTop: 25,
        }}
        onPress={() => {
          navigation.navigate('ProfileScreen', {
            id: 0,
            name: 'Antonio',
            age: 27,
          });
        }}>
        <Text style={styles.mainButtonText}>Antonio Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.mainButton,
          backgroundColor: 'green',
          marginTop: 25,
        }}
        onPress={() => {
          navigation.navigate('ProfileScreen', {
            id: 1,
            name: 'Aris',
            age: 29,
          });
        }}>
        <Text style={styles.mainButtonText}>Aris Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1Screen;
