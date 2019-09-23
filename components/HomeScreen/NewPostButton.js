import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';


export default function NewPostButton(props) {
  return (
    <Button
      style={styles.button}
      onPress={() => props.handleNewPostTap()}
    >
      <Icon name="add" />
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44
  }
})