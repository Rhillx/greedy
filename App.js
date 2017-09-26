import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Search from './components/Search';
import Button from './components/Button';

export default class App extends React.Component {

// const appid = "e585f7fa"
// const key = "9f81c3313f7c55420bb81de19355f8e8"
// const recipe = this.state.text
// const url = 


  render() {
   
    return (
      <View style={styles.container}>
        <Search/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  },
});
