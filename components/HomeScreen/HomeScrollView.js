import React, { Component } from 'react';
import { ScrollView, RefreshControl, StyleSheet } from 'react-native';
import PostScrollViewCell from './PostScrollViewCell';
import InitialLoader from '../InitialLoader';


export default class HomeScrollView extends Component {

  state = {
    isInitialLoad: true, // only true when the screen is opened for the first time
    isScrolling: false,
    isRefeshing: !true
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
    // console.log('scrollView started scrolling from momentum');
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

  async handleRefresh() {
    this.setState({isScrollViewRefreshing: true})
    await this.props.getPosts();
    this.setState({isScrollViewRefreshing: false})
  }

  render() {

    // if (this.state.isInitialLoad) return <InitialLoader />

    const { isRefeshing } = this.state;
    const { posts } = this.props;

    return (
      <ScrollView
        style={styles.scrollView}
        onScrollBeginDrag={this.handleDragStart.bind(this)}
        onScrollEndDrag={this.handleDragEnd.bind(this)}
        onMomentumScrollBegin={this.handleScrollStart.bind(this)}
        onMomentumScrollEnd={this.handleScrollEnd.bind(this)}
        refreshControl={
          <RefreshControl
            refreshing={isRefeshing}
            onRefresh={() => this.handleRefresh()}
          />
        }
      >
        {posts.map((post, i) =>
          <PostScrollViewCell
            key={i}
            post={post}
          />
        )}
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  scrollView: {
    width: '100%'
  }
});