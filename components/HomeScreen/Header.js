import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { Theme } from '../../Styles/Theme';

const Header = (props) => {
  const { handleNewPostTap } = props;
  return (
    <View style={styles.header}>
      <Button
        style={styles.postButton}
        onPress={() => handleNewPostTap()}
      >
        <Icon name="add" />
      </Button>
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