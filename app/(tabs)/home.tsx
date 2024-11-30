import { useState } from "react";
import { View , Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
export default async function Home(){

       let [loading , setLoading] = useState(true)
       return (
              <View style={{ height: 50, justifyContent: 'space-between', alignItems: 'center' , borderWidth: 2 , flexDirection: "row" , paddingHorizontal: 16,}}>
                <Text>E-Commerce Website</Text>
                <AntDesign name="user" size={24} color="black" />
              </View>
         );
}