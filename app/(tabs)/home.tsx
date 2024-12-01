import { useCallback, useEffect, useState } from "react";
import { View, Text, TextInput, ActivityIndicator,FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, RefreshControl } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Category } from "@/constants/Interfaces";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
export default function Home() {

  let [loading, setLoading] = useState<boolean>(true)
  const [refreshing, setRefreshing] = useState<boolean>(false);

  interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }

  interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }

  interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }

  interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
  }


  interface Category {
    id: string;
    name: string;
    image: string;
    products: string[];
    slug: string;
  }


  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  let [chosenCategory, setChosenCategory] = useState<string>("")
  let fetchCategory = async () => {
    console.log("fetch category");
    let response = await fetch("https://dummyjson.com/products/categories")
    let data = await response.json()
    setCategories(data)
  }



  useEffect(() => {
    fetchCategory()
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [chosenCategory , refreshing])
  let fetchProducts = async () => {
    console.log("fetch products");
    if (chosenCategory == "") {
      let response = await fetch(`https://dummyjson.com/products`)
      let data = await response.json()
      setProducts(data.products)
      setLoading(false)
    } else {
      console.log("category chaged", chosenCategory);
      console.log("category chaged", chosenCategory);
      console.log("category chaged", chosenCategory);
      console.log("category chaged", chosenCategory);

      let response = await fetch(`https://dummyjson.com/products/category/${chosenCategory}`)
      let data = await response.json()
      setProducts(data.products)
      setLoading(false)
      setRefreshing(false)
    }
  }

  const { width } = Dimensions.get('window'); // Get screen width

  let styles = StyleSheet.create({
    chip: {
      backgroundColor: "green",
      color: "white",
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 5,
    },
    card: {
      width: width * 0.45, // Responsive width for each card (45% of the screen width)
      margin: width * 0.025, // Margin between cards
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5, // For Android shadow
    },
    image: {
      width: '100%',
      height: 80,
      borderRadius: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    price: {
      fontSize: 16,
      color: '#ff5722',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#4CAF50',
      paddingVertical: 8,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  })
  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);
  //gitub push
  return (
    <View>
      <View style={{ height: 50, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: "green", flexDirection: "row", paddingHorizontal: 16, }}>
        <Text style={{textAlign: "center"}}><Ionicons name="arrow-back-outline" size={24} color="green" onPress={() => router.push("/home")}/>E-Commerce Website</Text>
        <AntDesign name="user" size={24} color="black" />
      </View>
      <View >
        <TextInput placeholder="Search" style={{
          borderWidth: 1,
          borderColor: "green",
          borderRadius: 10,
          padding: 10,
          margin: 10,
          width: "90%",
          height: 50,
          backgroundColor: "#DAF9E9"
        }} />
      </View>


      {
        loading ?  <ActivityIndicator size="large" color="green" /> :
          <FlatList
            style={{
              paddingBottom: 160,
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.card}>
                {/* Product Image */}
                <Image source={{ uri: item.thumbnail }} style={styles.image} />

                {/* item Title */}
                <Text style={styles.title}>{item.title}</Text>

                {/* item Price */}
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>

                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            )}
            ListHeaderComponent={
              <FlatList
                data={categories}
                horizontal={true}
                style={{
                  padding: 5,
                }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(data, index) => index.toString()}
                renderItem={({ item }) => {
                  const isChosen = chosenCategory === item.slug;
                  return (
                    <TouchableOpacity
                      style={[
                        isChosen && { backgroundColor: "black" },
                        styles.chip
                      ]}
                      onPress={() => setChosenCategory(item.slug)}
                    >
                      <Text style={{ color: isChosen ? "#000" : "#fff" }} numberOfLines={1}>
                        {item.slug[0].toUpperCase() + item.slug.slice(1)}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            }
          />
      }
    </View>
  );
}