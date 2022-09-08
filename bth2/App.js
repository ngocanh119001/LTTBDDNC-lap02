import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
function callbacksa() {
    console.log("Susses")
    
}
export default function App() {
  return (
    <View style={styles.container}>
    <View>
       <TextInput style={styles.text}>Bai Thuc Hanh 2   </TextInput>
       <Button title="Show"></Button>
       <Text styles={styles.text}>{callbacksa}</Text>
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
   text: {
      color: '#41cdf4',
   },
});