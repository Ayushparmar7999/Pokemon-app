
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
          source={require('../assets/pokemons.jpg')} 
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


// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
// import LottieView from 'lottie-react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const HomeScreen = ({ navigation }) => {
//   // Animation values
//   const buttonScale = new Animated.Value(1);
//   const headerOpacity = new Animated.Value(0);
//   const pokemonImageY = new Animated.Value(50);

//   useEffect(() => {
//     // Animate the header when the screen mounts
//     Animated.timing(headerOpacity, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();

//     // Floating animation for Pokémon image
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(pokemonImageY, { toValue: -10, duration: 2000, useNativeDriver: true }),
//         Animated.timing(pokemonImageY, { toValue: 10, duration: 2000, useNativeDriver: true }),
//       ])
//     ).start();
//   }, []);

//   const handleButtonPressIn = () => {
//     Animated.spring(buttonScale, {
//       toValue: 0.9,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleButtonPressOut = () => {
//     Animated.spring(buttonScale, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <LinearGradient colors={['#6E8EF5', '#985EE8']} style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
        
//         {/* Header Section with Animation */}
//         <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
//           <Image 
//             source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} 
//             style={styles.logo} 
//           />
//           <Text style={styles.title}>Welcome to Pokémon World</Text>
//           <Text style={styles.subtitle}>
//             Collect, Manage, and Discover New Pokémon!
//           </Text>
//         </Animated.View>

//         {/* Lottie Animation for Pokémon Greeting */}
//         <View style={styles.lottieContainer}>
//           <LottieView
//             // source={require('../assets/pokemon-lottie.json')} 
//             autoPlay 
//             loop 
//             style={styles.lottieAnimation} 
//           />
//         </View>

//         {/* Add Pokémon Button with Press Animation */}
//         <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
//           <TouchableOpacity 
//             style={styles.addButton} 
//             onPress={() => navigation.navigate('AddPokemon')}
//             onPressIn={handleButtonPressIn}
//             onPressOut={handleButtonPressOut}
//             activeOpacity={0.9}
//           >
//             <Text style={styles.addButtonText}>+ Add Pokémon</Text>
//           </TouchableOpacity>
//         </Animated.View>

//         {/* Floating Pokémon Image with Animation */}
//         <Animated.Image 
//           source={require('../assets/pokemons.jpg')} 
//           style={[
//             styles.pokemonCharacter, 
//             { transform: [{ translateY: pokemonImageY }] }
//           ]} 
//         />
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//     paddingBottom: 40,
//   },

//   header: {
//     alignItems: 'center',
//     paddingTop: 60,
//     paddingBottom: 30,
//     backgroundColor: 'rgba(0, 123, 255, 0.8)',
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 5,
//   },

//   logo: {
//     width: 160,
//     height: 90,
//     resizeMode: 'contain',
//     marginBottom: 10,
//   },

//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     letterSpacing: 1.2,
//     textAlign: 'center',
//     marginBottom: 10,
//   },

//   subtitle: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },

//   lottieContainer: {
//     height: 150,
//     marginBottom: 10,
//   },

//   lottieAnimation: {
//     width: '100%',
//     height: 150,
//   },

//   addButton: {
//     marginHorizontal: 40,
//     paddingVertical: 18,
//     backgroundColor: '#FF4500', 
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 10,
//     flexDirection: 'row',
//     marginTop: -20,
//   },

//   addButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '700',
//     textTransform: 'uppercase',
//     letterSpacing: 1,
//   },

//   pokemonCharacter: {
//     width: 250,
//     height: 250,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginTop: 10,
//     borderRadius: 190,
//   },
// });

// export default HomeScreen;
