import {StyleSheet} from 'react-native';

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
  },

  mainButtonText: {
    color: 'white',
    fontSize: 20,
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

  drawerLinks: {
    fontSize: 25,
    margin: 10,
  },
});
