// import React from 'react';
// import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import PokemonCard from '../Components/PokemonCard';
// import { removePokemon } from '../Redux/pokemonSlice';

// const PokemonListScreen = ({ navigation }) => {
//   const pokemons = useSelector(state => state.pokemon.pokemons);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(removePokemon(id));
//   };

//   return (
//     <View style={styles.container}>
//       {pokemons.length > 0 ? (
//         <FlatList
//           data={pokemons}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({ item }) => (
//             <PokemonCard 
//               pokemon={item} 
//               onEdit={() => navigation.navigate('EditPokemon', { pokemon: item })} 
//               onDelete={() => handleDelete(item.id)} 
//             />
//           )}
//           contentContainerStyle={styles.listContent}
//           showsVerticalScrollIndicator={false}
//         />
//       ) : (
//         <View style={styles.emptyStateContainer}>
//           <Text style={styles.emptyStateText}>No Pokémon Added Yet</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//   },
//   listContent: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 30,
//   },
//   emptyStateContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyStateText: {
//     fontSize: 20,
//     color: '#A9A9A9',
//     fontWeight: '500',
//     textAlign: 'center',
//   },
// });

// export default PokemonListScreen;

import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../Components/PokemonCard';
import { removePokemon, setLoading } from '../Redux/pokemonSlice';

const PokemonListScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false); 
  const pokemons = useSelector(state => state.pokemon.pokemons);
  const dispatch = useDispatch();


  const handleDelete = (id) => {
    dispatch(removePokemon(id));
  };

  const handleRefresh = () => {
    setRefreshing(true); 
    dispatch(setLoading(true)); 

  
    setTimeout(() => {
      setRefreshing(false); 
      dispatch(setLoading(false)); 
    }, 1000); 
  };

  return (
    <View style={styles.container}>
      {pokemons.length > 0 ? (
        <FlatList
          data={pokemons}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PokemonCard 
              pokemon={item} 
              onEdit={() => navigation.navigate('EditPokemon', { pokemon: item })} 
              onDelete={() => handleDelete(item.id)} 
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={handleRefresh} 
              colors={['#4A90E2']} // Customize spinner color
            />
          }
        />
      ) : (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>No Pokémon Added Yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 20,
    color: '#A9A9A9',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default PokemonListScreen;
