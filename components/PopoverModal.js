import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, SafeAreaView, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';
import { Button, Icon } from 'native-base';

/**
 * pass a screen or component in as a prop.
 * - there will be a basic button to present and dismiss the screen
 */
export class PopoverModal extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(modalVisible) {
    this.setState({modalVisible});
  }

  render() {

    const { modalVisible } = this.state;
    const { screen } = this.props;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <SafeAreaView style={styles.modalContent}>
            <Button
              style={styles.dissmissButton}
              onPress={() => this.setModalVisible(false)}
            >
              <Icon name="close" />
            </Button>
            { screen }
          </SafeAreaView>
        </Modal>

        {/* this button presents the modal */}
        <TouchableHighlight
          onPress={() => this.setModalVisible(true)}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    width: '100%'
  },
  dissmissButton: {
    width: 44,
    height: 44
  }
})