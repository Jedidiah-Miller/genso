import React from 'react';
import { View, StyleSheet } from 'react-native';
import PostButton from '../IconButton';
import { Theme } from '../../Styles/Theme';

const Header = (props) => {
  const { handleNewPostTap } = props;
  return (
    <View style={styles.header}>
      <PostButton
        style={styles.postButton}
        cb={handleNewPostTap}
      />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: Theme.colors.primaryColor
  },
  postButton: {
    // position: 'absolute',
    top: 44,
    right: 0
  }
})