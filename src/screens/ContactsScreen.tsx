import React from 'react';
import {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

const ContactsScreen = () => {
  const {authState, signIn, signOut} = useContext(AuthContext);

  const {isLoggedin, username} = authState;
  return (
    <View style={styles.contactsContainer}>
      <Text style={styles.pageTitle}>Contacts Screen</Text>
      {isLoggedin ? (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text>Hello {username}</Text>
          <TouchableOpacity
            style={{...styles.signInBtn, marginTop: 20}}
            onPress={signOut}>
            <Text style={styles.signInTxt}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.signInBtn} onPress={signIn}>
          <Text style={styles.signInTxt}>Sign In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ContactsScreen;
