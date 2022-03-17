// In App.js in a new project

import * as React from 'react';
import { View, Text,TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const col = 5;
const row = 5;
var available =0;

const cells = [];

for (let i = 0; i < row; i++)
{
  cells[i] = [];
  for (let j = 0; j < col; j++)
  {
    cells[i][j] = 'Arif';
  }
}

if (cells[0][0] == 'Arif' && cells[0][0] == 'Arif') 
available = 9;

console.log(cells);
console.log(available);

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
 <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
      />

<Button
  //onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>




    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;