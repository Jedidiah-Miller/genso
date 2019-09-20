import React, { Component } from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';
import PostScrollViewCell from './PostScrollViewCell';
import Header from './Header';
// import { _postService } from '../../services/firestore';
import { Post } from '../../Models/Post';


export class HomeScrollView extends Component {

  state = {
    isScrolling: false,
    posts: []
  }

  componentDidMount() {
    this.tempPosts()
  }

  /**
   * called when the user starts draggin up or down
   * on the scroll view
   */
  handleDragStart() {
    console.log('user started scrolling');
    this.setState({ isScrolling: true });
  }

  /**
   * called when the scroll view starts scrolling
   */
  handleScrollStart() {
    console.log('scrollView started scrolling');
    // this.setState({ isScrolling: true });
  }

  /**
   * called when the scroll view stops scrolling
   */
  handleScrollEnd() {
    console.log('scrollView stopped scrolling');
    // this.setState({ isScrolling: false });
  }

  /**
   * called when the user stops dragging up or down
   * on the scroll view
   */
  handleDragEnd() {
    console.log('user stopped scrolling');
    this.setState({ isScrolling: false });
  }

  handleNewPostTap() {
    console.log('lets make a new post');
    // present a new screen with a keyboard and a text field
    

  }

  tempPosts() {
    var tempPosts = [];
    for (var i = 0; i < 50; i++) {
      const data = {
        text: 'this is post number ' + (i + 1),
        authorId: 'none rn',
        createdAt: 'never rn'
      }
      tempPosts.push(new Post(i, data));
    }

    this.setState({posts: tempPosts})
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Header
          style={styles.header}
          handleNewPostTap={this.handleNewPostTap.bind(this)}
        />
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            style={styles.scrollView}
            onScrollBeginDrag={this.handleDragStart.bind(this)}
            onScrollEndDrag={this.handleDragEnd.bind(this)}
            onMomentumScrollBegin={this.handleScrollStart.bind(this)}
            onMomentumScrollEnd={this.handleScrollEnd.bind(this)}
            >
            {posts.map((post, i) =>
              <PostScrollViewCell
              key={i}
              post={post}
              />
              )}
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

export default HomeScrollView;


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
  },
  scrollView: {
    width: '100%'
  }
});