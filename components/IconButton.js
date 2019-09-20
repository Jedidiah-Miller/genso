import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Theme } from '../Styles/Theme'

export default function IconButton(props) {
  const { cb, imgSrc } = props
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => cb()}
    >
      {/* <Image
        style={styles.image}
        source={imgSrc}
      /> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    color: Theme.colors.primaryColor,

    // temporary
    borderWidth: 4, borderColor: 'red'
  },
  image: {
    width: '100%'
  }
})