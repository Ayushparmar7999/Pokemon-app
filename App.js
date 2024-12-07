
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider  } from 'react-redux';
import store from './Redux/store';
import HomeScreen from './Components/HomeScreen';
import AddPokemonScreen from './Components/AddPokemonScreen'; 
import CustomHeader from './Components/CustomHeader';
import PokemonListScreen from './Components/PokemonListScreen';
import EditPokemonScreen from './Components/EditPokemonScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            header: ({ navigation, route, options }) => (
              <CustomHeader title={options.title || 'Pokémon Manager'} />
            ),
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pokémon Manager' }} />
          <Stack.Screen name="EditPokemon" component={EditPokemonScreen} options={{ title: 'Edit Pokémon' }} />
          <Stack.Screen name="AddPokemon" component={AddPokemonScreen} options={{ title: 'Add Pokémon' }} />
          <Stack.Screen name="PokemonList" component={PokemonListScreen} options={{ title: 'Pokémon List' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
