// import { useFonts } from 'expo-font';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
// import Feather from '@expo/vector-icons/Feather';
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Entypo from '@expo/vector-icons/Entypo';

// import { Stack } from "expo-router";

// export default function RootLayout() {
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   let cardData = [
//     [
//       {
//         title: "CarPool",
//         icon: <FontAwesome5 name="car" size={34} color="green" />,
//         backgroundColor: "#89CEDE",
//       },
//       {
//         title: "Ride",
//         icon: <MaterialCommunityIcons name="bike" size={34} color="green" />,
//         backgroundColor: "#9BDCAB",
//       }
//     ],
//     [
//       {
//         title: "Delivery",
//         icon: <MaterialCommunityIcons name="truck-fast-outline" size={34} color="green" />,
//         backgroundColor: "#DACEBF",
//       },
//       {
//         title: "Mobiles",
//         icon: <Entypo name="tablet-mobile-combo" size={34} color="green" />,
//         backgroundColor: "#B9D3E0",
//       }
//     ],
//     [
//       {
//         title: "Shops",
//         icon: <Entypo name="shop" size={34} color="green" />,
//         backgroundColor: "#B0B6DE",
//       },
//       {
//         title: "Rental",
//         icon: <Entypo name="back-in-time" size={34} color="green" />,
//         backgroundColor: "#DCE0B0",
//       }
//     ],
//   ];

//   let screenHeight = Dimensions.get('window').height;

//   let style = StyleSheet.create({
//     bannerImageView: {
//       height: screenHeight / 3.5,
//       backgroundColor: "#DBE5E0",
//       paddingHorizontal: 16,
//     },
//     bannerImage: {
//       height: "85%",
//       marginTop: 6,
//       borderRadius: 10,
//     },
//     infoView: {
//       backgroundColor: "white",
//       marginTop: -15,
//       height: 40,
//       justifyContent: "space-around",
//       alignItems: "center",
//       paddingHorizontal: 22,
//       borderRadius: 10,
//       marginHorizontal: 16,
//       flexDirection: "row",
//       shadowColor: "#000", // Shadow color
//       shadowOffset: { width: 0, height: 2 }, // Shadow offset
//       shadowOpacity: 0.25, // Shadow opacity
//       shadowRadius: 3.84, // Shadow radius
//       elevation: 7, // Android shadow
//     },
//   });

//   return (
//     <View style={{ flex: 1 }}>

//       {/* Header Start Here */}
//       <View style={{
//         height: 50, marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'green',
//         alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: "row"
//       }}>
//         <MaterialIcons name="menu" size={24} color="green" />
//         <Text style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>BYKEA</Text>
//         <MaterialIcons name="phone" size={24} color="green" />
//       </View>
//       {/* Header End Here */}

//       {/* Slider Start Here */}
//       <View style={style.bannerImageView}>
//         <Image source={{
//           uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpFwFp4tJvwYa9iMRbvNueotN2pHNCRwEXoh2iYPbAEbeZOCtzkOXD-KWJEk1GtUFPMw&usqp=CAU"
//         }} style={style.bannerImage} />
//       </View>
//       {/* Slider End Here */}

//       {/* Info View Start Here */}
//       <View style={style.infoView}>
//         <Feather name="message-circle" size={24} color="green" />
//         <FontAwesome5 name="receipt" size={24} color="green" />
//       </View>
//       {/* Info View End Here */}

//       {/* Card Section Start Here */}
//       <View style={{ flex: 1, backgroundColor: "#fff", paddingVertical: 9 }}>
//         {cardData.map((cardRow, index) => (
//           <View key={index} style={{
//             flex: 1, flexDirection: "row", overflow: "hidden", justifyContent: "space-between",
//             alignItems: "center", paddingHorizontal: 16, gap: 8
//           }}>
//             {cardRow.map((card, cardIndex) => (
//               <View key={cardIndex} style={{
//                 flex: 1, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: card.backgroundColor,
//                 borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 7, height: "90%"
//               }}>
//                 <Text style={{ textAlign: "right" }}>{card.title}</Text>
//                 <View style={{
//                     flex: 1,
//                     justifyContent: "center",
//                     alignItems: "flex-start",
//                 }}>

//                   {card.icon}
//                 </View>
//               </View>
//             ))}
//           </View>
//         ))}
//       </View>
//       {/* Card Section End Here */}

//     </View>
//   );
// }

import { Stack } from 'expo-router';
export default function RootLayout() {

  return (
    <Stack  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="todoPage" />
    </Stack>
  )
}