import React from 'react'
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import BottomBar from "../components/BottomBar";
import PresentationalComponent from '../components/PresentationalComponent';

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
            <>
                <View style={PresentationalComponent.TutorScreen_container}>
                    <TouchableOpacity style={PresentationalComponent.TutorScreen_tutbut}>
                        <Text style={PresentationalComponent.TutorScreen_butText}>Manage Appointments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={PresentationalComponent.TutorScreen_tutbut}>
                        <Text style={PresentationalComponent.TutorScreen_butText}>Set Availability</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={PresentationalComponent.TutorScreen_tutbut}>
                        <Text style={PresentationalComponent.TutorScreen_butText}>Check In</Text>
                    </TouchableOpacity>
                </View>
                <BottomBar nav={this.props.navigation}
                />
            </>
        )
    }
}
