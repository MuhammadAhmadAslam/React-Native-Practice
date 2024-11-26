// import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInputComponent, TextInput, Button , FlatList} from "react-native";
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useState } from "react";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Entypo from '@expo/vector-icons/Entypo';
// import { router } from "expo-router";
// export default function TodoPage() {

//     let screenHeight = Dimensions.get("window").height

//     let todo = [
//         {
//             todo: "Buy Milk",
//             id: 1,
//         },
//         {
//             todo: "Buy Grocery",
//             id: 2,
//         },
//     ]

//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             paddingTop: 20,
//         },
//         header: {
//             height: 60,
//             justifyContent: "center",
//             marginTop: 4,
//             borderBottomColor: "green",
//             borderBottomWidth: 1,
//             paddingHorizontal: 16,
//         },
//         headerText: {
//             textAlign: "center",
//             fontSize: 18,
//         },
//         addTodoContainer: {
//             paddingHorizontal: 16,
//             marginVertical: 10,
//         },
//         input: {
//             borderWidth: 1,
//             borderColor: "green",
//             borderRadius: 10,
//             padding: 10,
//             marginBottom: 10,
//         },
//         addButton: {
//             borderWidth: 1,
//             borderColor: "green",
//             borderRadius: 10,
//             padding: 10,
//         },
//         addButtonText: {
//             textAlign: "center",
//             color: "green",
//             fontSize: 16,
//         },
//         todoList: {
//             flex: 1,
//             paddingHorizontal: 16,
//         },
//         todoItem: {
//             flexDirection: "row",
//             alignItems: "center",
//             marginVertical: 10,
//         },
//         todoText: {
//             marginLeft: 10,
//             fontSize: 16,
//         },
//     });


//     return (
//         <View>
//             <View style={{ height: 60, justifyContent: "center", marginTop: 4, borderBottomColor: "green", borderBottomWidth: 1, paddingHorizontal: 16 }}>
//                 <Text style={{ textAlign: "center", fontSize: 18 }}>React Native Todo Application</Text>
//             </View>

//             <View style={{ paddingHorizontal: 16 }}>
//                 <TextInput placeholder="Enter Todo" style={{ borderWidth: 1, borderColor: "green", borderRadius: 10, padding: 10, margin: 10 }} />
//                 <TouchableOpacity style={{ borderWidth: 1, borderColor: "green", borderRadius: 10, padding: 10 }} onPress={() => { }} ><Text style={{ textAlign: "center" }}>Add To Do</Text></TouchableOpacity>
//             </View>

//             <FlatList
//                 data={todo}
//                 renderItem={({ item }) => (
//                     <View style={styles.todoItem}>
//                         <MaterialCommunityIcons
//                             name="checkbox-marked-circle"
//                             size={24}
//                             color="green"
//                         />
//                         <Text style={styles.todoText}>{item.todo}</Text>
//                     </View>
//                 )}
//                 // Ensuring the list is scrollable
//                 style={styles.todoList}
//             />
//         </View>
//     );
// }

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList, Dimensions } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from "expo-router";

export default function TodoPage() {

    // State for holding the todos
    const [todos, setTodos] = useState([
        { id: "1", todo: "Buy Milk" },
        { id: "2", todo: "Buy Grocery" },
        { id: "3", todo: "Buy Milk" },
        { id: "4", todo: "Buy Grocery" },
        { id: "5", todo: "Buy Milk" },
        { id: "6", todo: "Buy Grocery" },
        { id: "7", todo: "Buy Milk" },
        { id: "8", todo: "Buy Grocery" },
        { id: "9", todo: "Buy Milk" },
        { id: "10", todo: "Buy Grocery" },
        { id: "11", todo: "Buy Milk" },
        { id: "12", todo: "Buy Grocery" },
        { id: "13", todo: "Buy Milk" },
        { id: "14", todo: "Buy Grocery" },
        { id: "15", todo: "Buy Milk" },
        { id: "16", todo: "Buy Grocery" },
        { id: "17", todo: "Buy Milk" },
        { id: "18", todo: "Buy Grocery" },
    ]);

    // State for the new todo input
    const [newTodo, setNewTodo] = useState("");

    // Add new todo function
    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos((prevTodos) => [
                ...prevTodos,
                { id: (prevTodos.length + 1).toString(), todo: newTodo },
            ]);
            setNewTodo(""); // Clear the input after adding
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>React Native Todo Application</Text>
            </View>

            {/* Add Todo Section */}
            <View style={styles.addTodoContainer}>
                <TextInput
                    placeholder="Enter Todo"
                    style={styles.input}
                    value={newTodo}
                    onChangeText={setNewTodo}
                />
                <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                    <Text style={styles.addButtonText}>Add To Do</Text>
                </TouchableOpacity>
            </View>

            {/* Todo List Section */}
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <MaterialCommunityIcons
                            name="checkbox-marked-circle"
                            size={24}
                            color="green"
                        />
                        <Text style={styles.todoText}>{item.todo}</Text>
                    </View>
                )}
                // Ensuring the list is scrollable
                style={styles.todoList}
            />
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    header: {
        height: 60,
        justifyContent: "center",
        marginTop: 4,
        borderBottomColor: "green",
        borderBottomWidth: 1,
        paddingHorizontal: 16,
    },
    headerText: {
        textAlign: "center",
        fontSize: 18,
    },
    addTodoContainer: {
        paddingHorizontal: 16,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        padding: 10,
    },
    addButtonText: {
        textAlign: "center",
        color: "green",
        fontSize: 16,
    },
    todoList: {
        flex: 1,
        paddingHorizontal: 16,
    },
    todoItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    todoText: {
        marginLeft: 10,
        fontSize: 16,
    },
});
