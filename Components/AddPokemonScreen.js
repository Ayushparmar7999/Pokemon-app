

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const AddPokemonScreen = ({ navigation }) => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
      
//       {/* Header Image */}
//       <Image 
//         source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} 
//         style={styles.headerImage} 
//       />
      
//       <Text style={styles.title}>Add Your Pokémon</Text>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <Icon name="person-outline" size={20} color="#4A90E2" style={styles.icon} />
//         <TextInput 
//           placeholder="Pokémon Name" 
//           style={styles.input} 
         
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="paw-outline" size={20} color="#4A90E2" style={styles.icon} />
//         <TextInput 
//           placeholder="Breed" 
//           style={styles.input} 
         
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="leaf-outline" size={20} color="#4A90E2" style={styles.icon} />
//         <TextInput 
//           placeholder="Evolve Into" 
//           style={styles.input} 
         
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="chatbubble-outline" size={20} color="#4A90E2" style={styles.icon} />
//         <TextInput 
//           placeholder="Description" 
//           style={[styles.input, { height: 100 }]} 
//           multiline 
//         />
//       </View>

//       <TouchableOpacity 
//         style={styles.addButton} 
//         activeOpacity={0.9}
//       >
//         <Text style={styles.addButtonText}>Add Pokémon</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#F2F6FC',
//     flexGrow: 1,
//     alignItems: 'center',
//   },
//   headerImage: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 10,
//     marginTop:-10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 25,
//     marginBottom: 15,
//     paddingHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 5,
//     width: '100%',
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     color: '#333',
//   },
//   addButton: {
//     backgroundColor: '#4A90E2',
//     width: '100%',
//     paddingVertical: 15,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     shadowColor: '#4A90E2',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 10, // For Android elevation
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AddPokemonScreen;



import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../Redux/pokemonSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const AddPokemonScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [Evolve, setevolve] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name && breed && Evolve && description) {
      dispatch(addPokemon({ id: Date.now(), name, breed, Evolve, description }));
      navigation.navigate('PokemonList');
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Header Image */}
      <Image 
        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} 
        style={styles.headerImage} 
      />
      
      <Text style={styles.title}>Add Your Pokémon</Text>

      {/* Input Fields */}
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
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={handleSubmit}
        activeOpacity={0.9}
      >
        <Text style={styles.addButtonText}>Add Pokémon</Text>
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
    marginTop:-10,
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
  addButton: {
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
    elevation: 10, // For Android elevation
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddPokemonScreen;
