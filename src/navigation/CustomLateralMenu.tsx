import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import {styles, colors} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  useWindowDimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Drawer = createDrawerNavigator();

const CustomLateralMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <CustomeMenu {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default CustomLateralMenu;

const CustomeMenu = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* avatar container */}
      <View style={styles.avatarContainer}>
        <Text></Text>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* menu options */}

      <View style={styles.drawerLinksContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.linksContainer}>
          <Text>
            <Icon
              name="chatbox-ellipses-outline"
              size={30}
              color={colors.primary}
            />
          </Text>
          <Text style={styles.drawerLinks}>Navigation Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.linksContainer}>
          <Text>
            <Icon name="cog-outline" size={30} color={colors.primary} />
          </Text>
          <Text style={styles.drawerLinks}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
