
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const PokemonCard = ({ pokemon, onEdit, onDelete }) => {
  console.log('Pokemon data:', pokemon);
  return (
    <View style={styles.card}>
      <Image 
        source={require('../assets/images.jpg')} 
        style={styles.pokemonImage} 
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{pokemon.name}</Text>
        <Text style={styles.detailText}>Breed: {pokemon.breed}</Text>
        <Text style={styles.detailText}>Evolve into: {pokemon.evolve}</Text>
        <Text style={styles.description}>{pokemon.description}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton} onPress={() => onEdit(pokemon)}>
          <Icon name="create-outline" size={20} color="#4CAF50" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => onDelete(pokemon.id)}>
          <Icon name="trash-outline" size={20} color="#FF6347" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 1,
    elevation: 6, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
  },

  pokemonImage: {
    width: 80,
    height: 80,
    borderRadius:50,
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 5,
  },

  detailText: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 2,
  },

  description: {
    fontSize: 12,
    color: '#777777',
    marginBottom: 8,
  },

  actions: {
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5, 
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
export default PokemonCard;
