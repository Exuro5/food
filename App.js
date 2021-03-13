
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/screens/DetailScreen'

function HomeScreen({navigation}) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Go To Details' onPress={() => navigation.navigate('Details')} 
      />
    </View>
  );
}

const Stack = createStackNavigator();

const myStackNav = (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Overview' }} />
    </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      {myStackNav}
    </NavigationContainer>
  );
}

export default App;