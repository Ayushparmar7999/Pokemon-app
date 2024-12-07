

// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// const CustomHeader = ({ title }) => {
//   return (
//     <View style={styles.headerContainer}>
//       <Image
//         source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }}
//         style={styles.logo}
//       />
//       <Text style={styles.headerTitle}>{title}</Text>
//       <View style={styles.headerIcons}>
//         {/* <TouchableOpacity onPress={() => alert('Search Clicked!')}>
//           <Entypo name="dots" size={24} color="#FFFFFF" style={styles.icon} />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => alert('Menu Clicked!')}>
//           <Ionicons name="dots-two-vertical" size={24} color="#FFFFFF" style={styles.icon} />
//         </TouchableOpacity> */}

//         <TouchableOpacity onPress={() => alert('Search Clicked!')}>
//           <Entypo name="dots-three-vertical" size={24} color="#FFFFFF" style={styles.icon} />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => alert('Menu Clicked!')}>
//           <MaterialCommunityIcons name="pokemon-go" size={24} color="#FFFFFF" style={styles.icon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     height: 70,
//     backgroundColor: '#4A90E2', // Modern light blue color
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,

//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     elevation: 10, // For Android elevation
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//     letterSpacing: 1,
//   },
//   headerIcons: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   icon: {
//     marginLeft: 15,
//   },
// });

// export default CustomHeader;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }} 
       
        style={styles.logo} 
      />
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity >
          <Entypo name="dots-three-vertical" size={24} color="#FFFFFF" style={styles.icon} />
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
    marginLeft: 15,
  },
});

export default CustomHeader;
