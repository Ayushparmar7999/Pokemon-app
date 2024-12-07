
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; 

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();  
  const navigateToAddPokemon = () => {
    navigation.navigate('AddPokemon');
  };
  const navigateToShowpokemon = () => {
    navigation.navigate('PokemonList'); 
  };

  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }}
        style={styles.logo}
      />
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={navigateToShowpokemon}> 
          <MaterialIcons name="catching-pokemon" size={24} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAddPokemon}>  
          <MaterialIcons name="format-list-bulleted-add" size={24} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    letterSpacing: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    margin: 5,
  },
});
export default CustomHeader;

