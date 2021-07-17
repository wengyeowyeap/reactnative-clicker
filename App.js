import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  const press = () =>{
    setCount(count+1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Button style={styles.clickButton} title="Click Me!" onPress={press} accessibilityLabel="Click this button"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText:{
    fontSize:30
  },
  clickButton:{
    fontWeight:'bold'
  }
});
