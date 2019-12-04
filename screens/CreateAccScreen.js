"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class CreateAccScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.yellowbox}>
                    <TouchableOpacity
                        onPress={() => navigate("StudentCreate")}
                        style={styles.studentButton}
                    >
                        <Text>I am a student.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tutorButton}
                        onPress={() => navigate("CreateTutor")}
                    >
                        <Text>I am a tutor.</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default CreateAccScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#FCBA03",
        alignItems: "center",
        justifyContent: "center"
    },

    yellowbox: {
        height: 800,
        width: 500,
        backgroundColor: "#FCBA03",
        alignItems: "center",
        justifyContent: "center"
    },

    studentButton: {
        width: 150,
        backgroundColor: "grey",
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10,
        borderWidth: 1
    },

    tutorButton: {
        width: 150,
        backgroundColor: "grey",
        marginRight: 40,
        marginLeft: 40,
        marginTop: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10,
        borderWidth: 1
    }
});
