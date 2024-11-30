import { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList , TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
export default  function Home() {

  let [loading, setLoading] = useState(true)
  let [products, setProducts] = useState([])
  let [categories, setCategories] = useState([])
  let [chosenCategory , setChosenCategory] = useState("")
  let fetchCategory = async () => {
    console.log("fetch category");
    let response = await fetch("https://dummyjson.com/products/categories")
    let data = await response.json()
    setCategories(data)
  }

  console.log(categories, "categories");

  useEffect(() => {
    fetchCategory()
  }, [])

  let fetchProducts = async () => {
    console.log("fetch products");
    if (chosenCategory == "") {
      let response = await fetch(`https://dummyjson.com/products`)
      let data = await response.json()
      setProducts(data.products)
      console.log(data.products);
      setLoading(false)
    }else{
      let response = await fetch(`https://dummyjson.com/products/category/${chosenCategory}`)
      let data = await response.json()
      setProducts(data.products)
      console.log(data.products);
      setLoading(false)
    }
  }
  
  return (
    <View>
      <View style={{ height: 50, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: "green", flexDirection: "row", paddingHorizontal: 16, }}>
        <Text>E-Commerce Website</Text>
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

      <FlatList data={products} renderItem={({ item }) => <Text>{item}</Text>} keyExtractor={(data) => `${data}`}  ListHeaderComponent={
          <FlatList
            data={categories}
            horizontal={true}
            style={{
              padding: 10,
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(data) => data.slug}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => {
              const isChosen = chosenCategory == item;
              return (
                <TouchableOpacity
                  style={[
                    isChosen && { backgroundColor: "black" },
                  ]}
                  onPress={() => setChosenCategory(item)}
                >
                  <Text style={{ color: isChosen ? "#fff" : "#000" }}>
                    {item.slug}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        } />
    </View>
  );
}