
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} 
            style={styles.logo} 
          />
          <Text style={styles.title}>Welcome to Pokémon World</Text>
          <Text style={styles.subtitle}>
            Collect, Manage, and Discover New Pokémon!
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => navigation.navigate('AddPokemon')}
          activeOpacity={0.9}
        >
          <Text style={styles.addButtonText}>+ Add Pokémon</Text>
        </TouchableOpacity>
        <Image 
          source={require('../assets/ii.jpg')} 
          style={styles.pokemonCharacter} 
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', 
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1, 
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },

  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1.2,
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  addButton: {
    marginHorizontal: 40,
    paddingVertical: 18,
    backgroundColor: '#FF4500', 
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    flexDirection: 'row',
    marginTop: -20,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  pokemonCharacter: {
    width: 250,
    marginTop:5,
    borderRadius:190,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default HomeScreen;