import React, { Component } from 'react';
import { View, SafeAreaView , StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import TextBox from '../components/NewPost/TextBox';
import { isNullOrWhiteSpace } from '../Helpers/String'
import { _createPost } from '../services/Post';
import SubmitButton from '../components/NewPost/SubmitButton';

export default class NewPost extends Component {

  state = {
    text: '',
    isSubmitDisabled: true,
    isSubmitting: false
  }

  handleTextChange(text) {
    this.setState({
      text,
      isSubmitDisabled: isNullOrWhiteSpace(text)
    });
  }

  async createPost() {
    this.setState({isSubmitDisabled: true, isSubmitting: true});
    const { text } = this.state;
    const newPost = {
      uid: 'set this up later', 
      text,
      createdAt: Date.now()
    };
    await _createPost(newPost);
    // TODO:
    // check for errors here eventually
    this.setState({isSubmitting: false});
    this.props.navigation.goBack();
  }

  render() {
    const { isSubmitDisabled } = this.state;

    return (
      <SafeAreaView>
        <SubmitButton
          isSubmitDisabled={isSubmitDisabled}
          createPost={this.createPost.bind(this)}
        />
        <TextBox handleTextChange={this.handleTextChange.bind(this)} />

      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  postButton:{
    width: 44,
    height: 44
  }
})