import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';


export default function SubmitButton(props) {
  return (
    <Button
      style={styles.postButton}
      disabled={props.isSubmitDisabled}
      onPress={() => props.createPost()}
    >
      <Icon name="send" />
    </Button>
  )
}


const styles = StyleSheet.create({
  postButton:{
    width: 44,
    height: 44
  }
})