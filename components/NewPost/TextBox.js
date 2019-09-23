import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Theme } from '../../Styles/Theme';


export default function TextBox(props) {
  const { handleTextChange } = props;

  return (
    <View style={styles.textAreaContainer}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.textInput}
        onChangeText={text => handleTextChange(text)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: Theme.colors.primaryColor,
    borderWidth: 1,
    padding: 5
  },
  textInput: {
    height: 150,
    justifyContent: "flex-start",
    backgroundColor: 'white'
  }
})