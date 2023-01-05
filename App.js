import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Gallery from './src/screens/Gallery';
import AttractionDetails from './src/screens/AttractionDetails';

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>{/* Rest of your app code */}
          <Stack.Navigator screenOptions={{headerShown: false}} >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AttractionDetails" component={AttractionDetails} />
              <Stack.Screen name="Gallery" component={Gallery} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
