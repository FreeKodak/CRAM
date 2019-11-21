import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

export default class StudentCreateScreen extends Component {
    render() {
        return (
            <View>
                <Text>First Name</Text>
                <TextInput />

                <Text>Last Name</Text>
                <TextInput />

                <Text>Address</Text>
                <TextInput />

                <Text>What university are you currently enrolled in?</Text>
                <TextInput />

                <Text>What year are you in?</Text>
                <TextInput />

                <Text>What are you currently majoring in?</Text>
                <TextInput />
            </View>
        )
    }
}