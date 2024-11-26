import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function CarPool() {
    const [selected, setSelected] = useState('two');

    let screenHeight = Dimensions.get('window').height


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E5',
            backgroundColor: '#fff',
            height: 60,
        },
        backButton: {
            padding: 8,
        },
        profileButton: {
            padding: 8,
        },
        profileIcon: {
            width: 32,
            height: 32,
            borderRadius: 16,
        },
        toggleContainer: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            borderRadius: 20,
            padding: 4,
            marginHorizontal: 16,
            height: 36,
        },
        toggleButton: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
        },
        activeButton: {
            backgroundColor: '#E8F5E9',
        },
        toggleText: {
            fontSize: 14,
            color: '#666',
            fontWeight: '500',
        },
        activeText: {
            color: '#4CAF50',
        },
        leftButton: {
            marginRight: 2,
        },
        rightButton: {
            marginLeft: 2,
        },
        passengerContainer: {
            height: screenHeight / 6,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopColor: '#E5E5E5',            
            borderBottomColor: '#E5E5E5',            
        },
        locationContainer: {
            height: screenHeight / 4,
            paddingHorizontal: 16,
            marginTop: 14,
        },
        row: {
            flexDirection: 'row',
            gap: 12,
            marginBottom: 16,
        },
        secondRow: {
            marginTop: 4,
        },
        locationColumn: {
            flex: 2,
        },
        timeColumn: {
            flex: 1,
        },
        locationButton: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 25,
            borderWidth: 1,
            gap: 8,
        },
        pickupButton: {
            borderColor: '#4CAF50',
        },
        dropoffButton: {
            borderColor: '#7B61FF',
        },
        locationText: {
            fontSize: 15,
            color: '#333',
            fontWeight: '500',
        },
        timeLabel: {
            fontSize: 13,
            color: '#666',
            marginBottom: 4,
        },
        timeContainer: {
            backgroundColor: '#E8F5E9',
            borderRadius: 20,
            paddingVertical: 8,
            paddingHorizontal: 12,
            alignItems: 'center',
        },
        timeText: {
            color: '#4CAF50',
            fontSize: 15,
            fontWeight: '600',
        },
        amPm: {
            fontSize: 13,
            fontWeight: '500',
        },
    });
    return (
        <View style={styles.container}>

            {/* header starts here  */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#333" />
                </TouchableOpacity>

                <View style={styles.toggleContainer}>
                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            selected === 'two' && styles.activeButton,
                            styles.leftButton,
                        ]}
                        onPress={() => setSelected('two')}
                    >
                        <Text style={[
                            styles.toggleText,
                            selected === 'two' && styles.activeText
                        ]}>
                            Two way
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            selected === 'one' && styles.activeButton,
                            styles.rightButton,
                        ]}
                        onPress={() => setSelected('one')}
                    >
                        <Text style={[
                            styles.toggleText,
                            selected === 'one' && styles.activeText
                        ]}>
                            One way
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.profileButton}>
                    <Text>Drive</Text>
                </TouchableOpacity>
            </View>
            {/* header ends here  */}


            {/* select day starts here  */}
            <View style={{
                flexDirection: "row",
                marginTop: 12,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                gap: 4,
            }}>
                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#DAF9E9", paddingHorizontal: 4, borderRadius: 10, paddingVertical: 5 }}>
                    <Text style={{
                        color: "#469A68",
                    }}>Start ASAP <AntDesign name="calendar" size={14} color="#469A68" /></Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 4
                }}>
                    <TouchableOpacity style={{ backgroundColor: "#E8F5E9", paddingVertical: 6, paddingLeft: 7, paddingRight: 7, borderRadius: 10, }}><Text style={{ color: "#4CAF50" }}>S</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E8F5E9", paddingVertical: 6, paddingLeft: 7, paddingRight: 7, borderRadius: 10, }}><Text style={{ color: "#4CAF50" }}>M</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E8F5E9", paddingVertical: 6, paddingLeft: 7, paddingRight: 7, borderRadius: 10, }}><Text style={{ color: "#4CAF50" }}>T</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E8F5E9", paddingVertical: 6, paddingLeft: 7, paddingRight: 7, borderRadius: 10, }}><Text style={{ color: "#4CAF50" }}>W</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E8F5E9", paddingVertical: 6, paddingLeft: 7, paddingRight: 7, borderRadius: 10, }}><Text style={{ color: "#4CAF50" }}>T</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E8F5E9", paddingVertical: 6, paddingLeft: 7, paddingRight: 7, borderRadius: 10, }}><Text style={{ color: "#4CAF50" }}>F</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E8F5E9", paddingVertical: 6, paddingLeft: 7, paddingRight: 7, borderRadius: 10, }}><Text style={{ color: "#4CAF50" }}>S</Text></TouchableOpacity>
                </View>
            </View>
            {/* select day ends here  */}

            <View style={styles.locationContainer}>
                <View style={styles.row}>
                    <View style={styles.locationColumn}>
                        <TouchableOpacity style={[styles.locationButton, styles.pickupButton]}>
                            <FontAwesome name="dot-circle-o" size={20} color="#4CAF50" />
                            <Text style={styles.locationText}>Pickup Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.timeColumn}>
                        <Text style={styles.timeLabel}>Reach work by:</Text>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>09:00 <Text style={styles.amPm}>AM</Text></Text>
                        </View>
                    </View>
                </View>

                {/* Dropoff Location Row */}
                <View style={[styles.row, styles.secondRow]}>
                    <View style={styles.locationColumn}>
                        <TouchableOpacity style={[styles.locationButton, styles.dropoffButton]}>
                            <FontAwesome name="dot-circle-o" size={20} color="#7B61FF" />
                            <Text style={styles.locationText}>Dropoff Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.timeColumn}>
                        <Text style={styles.timeLabel}>Leave work by:</Text>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>05:00 <Text style={styles.amPm}>PM</Text></Text>
                        </View>
                    </View>
                </View>
            </View>



            <View style={styles.passengerContainer}>

            </View>



            <View>

            </View>



            <View>

            </View>

        </View>
    );
}

