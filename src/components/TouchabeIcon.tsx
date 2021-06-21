import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

const TouchabeIcon = ({iconName}: Props) => {
  const {setFavIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => setFavIcon(iconName)}>
      <Icon name={iconName} size={40} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default TouchabeIcon;
