import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../Styles/Theme'

export default function PostScrollViewCell(props) {
  const { post } = props;
  return (
    <View style={styles.view}>
      <Text>
        {post.text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: Theme.colors.primaryColor,
    // backgroundColor: 'blue'
  }
})