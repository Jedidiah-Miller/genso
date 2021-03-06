import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { Theme } from '../Styles/Theme'

export default function IconButton(props) {

  const { cb, imgSrc } = props

  return (
    <Button
      style={styles.button}
      cb={() => cb()}
    >
      <Icon name="home" />
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    // color: Theme.colors.primaryColor
  }
})