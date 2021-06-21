import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856d6',
  black: '#000',
};

export const styles = StyleSheet.create({
  mainLayout: {
    margin: 15,
  },
  pageTitle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 25,
  },

  mainButton: {
    backgroundColor: '#1a72a5',
    padding: 30,
    alignItems: 'center',
    borderRadius: 40,
    flexDirection: 'row',
  },

  mainButtonText: {
    color: 'white',
    fontSize: 20,
  },

  userIcon: {
    marginRight: 50,
  },

  menuBtn: {
    marginLeft: 20,
  },

  drawerContainer: {
    backgroundColor: 'red',
  },

  avatarContainer: {
    alignItems: 'center',
    padding: 30,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  drawerLinksContainer: {
    marginLeft: 15,
  },

  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  drawerLinks: {
    fontSize: 25,
    marginLeft: 10,
  },

  settingsText: {
    marginLeft: 20,
  },

  contactsContainer: {
    alignItems: 'center',
  },

  signInBtn: {
    backgroundColor: colors.primary,
    width: 90,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  signInTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
