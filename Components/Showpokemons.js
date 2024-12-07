
import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from './PokemonCard';
import { removePokemon } from '../Redux/pokemonSlice';

const Showpokemons = ({ navigation }) => {
  const pokemons = useSelector(state => state.pokemon.pokemons);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removePokemon(id));
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
  header: {
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#007BFF', 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  logo: {
    width: 160,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1.2,
    textAlign: 'center',
  },
  addButton: {
    marginHorizontal: 30,
    paddingVertical: 14,
    backgroundColor: '#FF4500', 
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    flexDirection: 'row',
    marginTop: -25,
    zIndex: 1, 
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
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
export default Showpokemons;
