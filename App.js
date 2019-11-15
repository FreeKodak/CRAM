"use strict";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import FetchLocation from "./components/FetchLocation";
import UsersMap from "./components/UsersMap";
import PresentationalComponent from "./components/PresentationalComponent";
import Images from "./components/Images";

export default class App extends React.Component {
  state = {
    myState: "what it do babyyyyyy"
  };

  updateState = () => {
    this.setState({ myState: "Updated" });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.yellowbox}>
          <Image
            source={require("C:/Users/GEO OIL ENERGY 2016/Documents/Projects/CramApp/branding/logo.png")}
          />
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
