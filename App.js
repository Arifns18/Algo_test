// In App.js in a new project

import * as React from 'react';
import { View, Text,TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const col = 5;
const row = 5;
var region =0;

 const cells = [];

for (let i = 0; i < row; i++)
{
  cells[i] = [];
  for (let j = 0; j < col; j++)
  {
    
    cells[i][j] = 0;
    if (i%2==0)
    cells[i][j] = 1;
  }
}

// for (let k = 0; k < row; k++)
// {
//   for (let l = 0; l < col; l++)
//   {
//     if (cells[k][l] == 1 && cells[k][l+1] == 1) 
//     region++;

//      else if (cells[k][l] == 1 && cells[k+1][l] == 1)
//      region++;
    
//      else if (cells[k][l] == 1 && cells[k+1][l+1] == 1)
//      region++;

//      else if (cells[k][l] == 1 && cells[k-1][l-1] == 1)
//      region++;


//   }
// }
// 
// region++;

 console.log(cells);
//  console.log(region);

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter row and column below</Text>
      <TextInput
        style={{height: 40, backgroundColor:'white'}}
        placeholder="Type here to enter row"
      />
      <TextInput
        style={{height: 40, backgroundColor:'white'}}
        placeholder="Type here to enter column"
      />

<Button
  //onPress={submit}
  title="Submit"
  color="#841584"
  accessibilityLabel="Submit"
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