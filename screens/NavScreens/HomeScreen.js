import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';
import HomeScrollView from '../../components/HomeScreen/HomeScrollView';
import { _getAllPosts, _createPost } from '../../services/Post';
import NewPostButton from '../../components/HomeScreen/NewPostButton';

export default class HomeScreen extends Component {

  state = {
    isScrollViewRefreshing: true,
    isScrolling: false,
    posts: []
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <NewPostButton
          handleNewPostTap={() => navigation.navigate('NewPostScreen')}
        />
      ),
    }
  }

  async componentDidMount() {
    await this.getPosts();
  }

  handleNewPostTap() {
    this.props.navigation.navigate('NewPostScreen')
    // present a new screen with a keyboard and a text field
  }

  async getPosts() {
    this.setState({isScrollViewRefreshing: true})
    const posts = await _getAllPosts();
    this.setState({
      isScrollViewRefreshing: false,
      posts
    });
  }

  async handleRefresh() {
    this.setState({isScrollViewRefreshing: true})
    await this.getPosts();
    this.setState({isScrollViewRefreshing: false})
  }

  async createPost(data) {
    await _createPost(data);
    console.log('temporarily refreshing the timeline');
    this.getPosts();
  }

  render() {

    const { posts } = this.state;

    return (
      <View style={styles.container}>
        {/* <NewPostButton
          handleNewPostTap={this.handleNewPostTap.bind(this)}
        /> */}
        <SafeAreaView style={styles.safeArea}>
          <HomeScrollView
            posts={posts}
            getPosts={this.getPosts.bind(this)}
          />
        </SafeAreaView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: Layout.window.height,
    backgroundColor: 'yellow'
  },  
  header: {
    position: 'absolute',
    top: 0
  },
  safeArea: {
    width: '100%'
  }
});