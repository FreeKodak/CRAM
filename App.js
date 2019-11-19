"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import PresentationalComponent from "./components/PresentationalComponent";
import Inputs from "./screens/LoginScreen";
import { StackNavigator } from "react-navigation";

export default class Home extends React.Component {
  state = {
    myState: "Home Page"
  };

  updateState = () => {
    this.setState({ myState: "Updated" });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.yellowbox}>
          <Image source={require("./branding/logo.png")} />
        </View>
        <View style={styles.greybox}>
          <TouchableOpacity style={styles.loginButton}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FCBA03",
    alignItems: "center",
    justifyContent: "center"
  },

  yellowbox: {
    height: 300,
    width: 500,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center"
  },

  greybox: {
    height: 500,
    width: 500,
    backgroundColor: "#FCBA03",
    alignItems: "center",
    justifyContent: "center"
  },

  loginButton: {
    width: 100,
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

  registerButton: {
    width: 100,
    backgroundColor: "grey",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    borderWidth: 1
  }
});
