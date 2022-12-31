
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Home from './src/screens/Home';


const App = () => {

  return (
    <SafeAreaView style={styles.safeView}  >
      <View style={styles.view}  >
        <Home />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
  view: {
    flex: 1,
    backgroundColor: 'yellow',
  }
});

export default App;
