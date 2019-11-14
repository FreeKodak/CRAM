"use strict";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
        <View style={styles.yellowbox} />
        <View style={styles.greybox}>
          <Button style={styles.button} title="Login" />
          <Button title="Register" />
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
    backgroundColor: "#FCBA03"
  },

  greybox: {
    height: 500,
    width: 500,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    backgroundColor: "#FCBA03"
  }
});
