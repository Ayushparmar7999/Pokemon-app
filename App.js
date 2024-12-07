
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';  
import CustomHeader from './Screens/CustomHeader';
import AddPokemonScreen from './Screens/AddPokemonScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
            header: ({ navigation, route, options }) => (
              <CustomHeader title={options.title || 'Pokémon Manager'} />
            ),
          }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddPokemon" component={AddPokemonScreen} options={{ title: 'Add Pokémon' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );  
};
export default App;
