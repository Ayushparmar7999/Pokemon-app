import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { editPokemon } from '../Redux/pokemonSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const EditPokemonScreen = ({ route, navigation }) => {
  const { pokemon } = route.params;
  const [name, setName] = useState(pokemon.name);
  const [breed, setBreed] = useState(pokemon.breed);
  const [Evolve, setevolve] = useState(pokemon.evolve);
  const [description, setDescription] = useState(pokemon.description);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editPokemon({ id: pokemon.id, updatedPokemon: { ...pokemon, name, breed, Evolve, description } }));
    navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Edit Pokémon</Text>
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} color="#4A90E2" style={styles.icon} />
        <TextInput
          placeholder="Pokémon Name"
          style={styles.input}
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="paw-outline" size={20} color="#4A90E2" style={styles.icon} />
        <TextInput
          placeholder="Breed"
          style={styles.input}
          onChangeText={setBreed}
          value={breed}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="leaf-outline" size={20} color="#4A90E2" style={styles.icon} />
        <TextInput
          placeholder="Evolve Into"
          style={styles.input}
          onChangeText={setevolve}
          value={Evolve}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="chatbubble-outline" size={20} color="#4A90E2" style={styles.icon} />
        <TextInput
          placeholder="Description"
          style={[styles.input, { height: 100 }]}
          multiline
          onChangeText={setDescription}
          value={description}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F2F6FC',
    flexGrow: 1,
    alignItems: 'center',
  },
  headerImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10, 
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default EditPokemonScreen;
