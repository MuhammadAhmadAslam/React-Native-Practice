import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  let screenHeight = Dimensions.get('window').height;


  let style = StyleSheet.create({
    bannerImageView: {
      height: screenHeight / 3,
      backgroundColor: "#DBE5E0",
      paddingHorizontal: 16,
    },
    bannerImage: {
      height: "85%",
      marginTop: 6,
      borderRadius: 10,
    },
    infoView: {
      backgroundColor: "white",
      marginTop: -15,
      height: 40,
      justifyContent: "space-around",
      alignItems: "center",
      paddingHorizontal: 22,
      borderRadius: 10,
      marginHorizontal: 16,
      flexDirection: "row",
      shadowColor: "#000", // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow offset
      shadowOpacity: 0.25, // Shadow opacity
      shadowRadius: 3.84, // Shadow radius
      elevation: 7, // Android shadow
    },

  })

  return (
    <View style={{
      flex: 1,
    }}>

      {/* Header Start Here  */}
      <View style={{ height: 50, marginTop: 10, borderBottomWidth: 0.4, borderBottomColor: 'green', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: "row" }}>
        <MaterialIcons name="menu" size={24} color="green" />
        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "green"
        }}>BYKEA</Text>
        <MaterialIcons name="phone" size={24} color="green" />
      </View>
      {/* Header End Here  */}



      {/* Slider Start Here  */}
      <View style={style.bannerImageView}>
        <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpFwFp4tJvwYa9iMRbvNueotN2pHNCRwEXoh2iYPbAEbeZOCtzkOXD-KWJEk1GtUFPMw&usqp=CAU"
        }}
          style={style.bannerImage}
        />
      </View>
      {/* Slider End Here  */}


      {/* Info View Start Here */}

      <View style={style.infoView}>
        <Feather name="message-circle" size={24} color="green" />
        <FontAwesome5 name="receipt" size={24} color="green" />
      </View>

      {/* Info View End Here */}


      {/* Card Sextion Start Here  */}
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <View style={{ flex: 1, backgroundColor: "red" , flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{flex: 1,}}>Card 1</Text>
          <Text style={{flex: 1,}}>Card 2</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue" }}></View>
        <View style={{ flex: 1, backgroundColor: "red" }}></View>
      </View>
      {/* Card Sextion End Here  */}
    </View>
  );
}
