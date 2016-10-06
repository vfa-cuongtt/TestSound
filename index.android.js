/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity
} from 'react-native';

var Sound = require('react-native-sound');
var s = new Sound('../storage/emulated/0/Music/Anh_Cu_Di_Di_Hari_Won.mp3', Sound.MAIN_BUNDLE, (e) => {
  if (e) {
    console.log('error', e);
  } else {
    console.log('duration', s.getDuration());
  }
});

class TestSound extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.playSound}>
          <Text style={styles.button}>play</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.pauseSound}>
          <Text style={styles.button}>pause</Text>
        </TouchableOpacity>
      </View>
    );
  }
  playSound(){

      s.play((success) => {
        if(success) {
          console.log('OK');
        } else {

        }
      });
  }

  pauseSound(){
    s.pause();
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
});

AppRegistry.registerComponent('TestSound', () => TestSound);
