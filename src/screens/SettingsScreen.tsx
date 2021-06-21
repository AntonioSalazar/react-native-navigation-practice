import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles, colors} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);
  const {favoriteIcon} = authState;
  return (
    <View style={{marginTop: insets.top, alignItems: 'center'}}>
      <Text style={styles.pageTitle}>Settings Screen</Text>
      <Text style={styles.settingsText}>
        {JSON.stringify(authState, null, 4)}
      </Text>
      {favoriteIcon && (
        <Icon
          name={favoriteIcon}
          size={150}
          color={colors.primary}
          style={{marginTop: 30}}
        />
      )}
    </View>
  );
};

export default SettingsScreen;
