import React from 'react'
import { TextInput } from 'react-native';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView,StatusBar  } from 'react-native';


export default function Input() {
    return (
        <View style={styles.container}>
            <View style={styles.topAlert}>
                <Text style={styles.chek}>X Checkout</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.pass}>Passenger Information</Text>
                {/* <View style={styles.user}> */}
                    <TextInput 
                        style={styles.input}
                        placeholder="Username"
                    />
                {/* </View> */}
                <TextInput 
                        style={styles.input}
                        placeholder="Email"
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Phone number"
                    />
                  <TouchableOpacity style={styles.button}>
                      <Text style={styles.next}>Next</Text>
                  </TouchableOpacity>
            </View>

        </View>
    )
}


const styles=StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "purple",
    },
    topAlert: {
        marginTop: 50,
    },
    chek: {
        marginLeft: 20,
        color: "white",
        fontSize: 15,
    },
    box: {
        backgroundColor: "white",
        width: "100%",
        flex: 1,
        borderTopLeftRadius:20,
        borderTopRightRadius:15,
        marginTop: 10,
        // paddingTop: 20,
    },
    pass: {
        fontWeight: "bold",
        marginTop: 15,
        marginLeft: 20,
        fontSize: 17,
    },
    input: {
        borderColor: "purple",
        borderRadius: 5,
        width: "90%",
        height: 50,
        backgroundColor: "white",
        alignSelf: "center",
        borderWidth: 2,
        marginTop: 30,
        justifyContent: "center",
        fontSize: 17,
        paddingLeft: 10,
    },
    button:{
        height: 50,
        // width:"80%",
        backgroundColor: "purple",
        marginHorizontal: 19,
        borderRadius: 4,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    next: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
    },
});