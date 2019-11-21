import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
// import ImagePicker from "react-native-image-picker"

export default class StudentCreateScreen extends Component {
    // handleChoosePhoto = () => {
    //     const options = {};
    //     ImagePicker.launchImageLibrary(options, response => {
    //         console.log("response", response);
    //     });
    // }
    render() {
        return (
            <View>
                <Text>First Name</Text>
                <TextInput />

                <Text>Last Name</Text>
                <TextInput />

                <Text>Address</Text>
                <TextInput />

                <Text>What university are you currently enrolled in or have graduated from?</Text>
                <TextInput />

                <Text>What year are you in?</Text>
                <TextInput />

                <Text>Please upload your most recent transcript.</Text>
                <Button
                    title="Choose Photo"
                // onPress={this.handleChoosePhoto}
                />
            </View>
        )
    }
}
