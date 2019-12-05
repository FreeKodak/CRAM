"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class LoginScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.yellowbox}>
          <TouchableOpacity
            onPress={() => navigate("StudentLogin")}
            style={styles.studentButton}
          >
            <Text>Login as a student.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tutorButton}
            onPress={() => navigate("TutorLogin")}
          >
            <Text>Login as a tutor.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

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
