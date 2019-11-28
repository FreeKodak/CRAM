import React from 'react'
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
// I'll make this prettier later i know its ugly
export default class TutorScreen extends React.Component {

    // -------------------- Comment this out once Profile page is made
    //
    // goProfile = () => {
    //     const { navigate } = this.props.navigation;
    //     navigate("Profile");
    // }
    // --------------------- And add this to the button for viewing profile
    //
    // onPress={() => this.goProfile()}

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.tutbut}>
                    <Text style={styles.butText}>Manage Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tutbut}>
                    <Text style={styles.butText}>View Your Tutor Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tutbut}>
                    <Text style={styles.butText}>Do Something Else</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    tutbut: {
        backgroundColor: 'grey',
        height: '28%'
    },
    butText: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})