"use strict";
import React, { Component } from "react";
import * as firebase from "firebase";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class CreateAcc extends Component {
  state = {
    email: "",
    password: "",
    fName: "",
    lName: "",
    accountType: ""
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  handleFName = text => {
    this.setState({ fName: text });
  };

  handleLName = text => {
    this.setState({ lName: text });
  };

  handleType = text => {
    this.setState({ accountType: text });
  };

  async register(email, pass, fname, lname, accT) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
      this.writeUserData(fname, lname, accT);
      alert("Account Created!");
    } catch (error) {
      alert(error.toString());
    }
  }

  writeUserData(fname, lname, type) {
    firebase
      .database()
      .ref("users/")
      .push({
        fname,
        lname,
        type
      })
      .then(data => {
        console.log("data ", data);
      })
      .catch(error => {
        console.log("error ", error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="   Email"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="   Password"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handlePassword}
        />
        <TextInput
          style={styles.input}
          placeholder="  First Name"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handleFName}
        />

        <TextInput
          style={styles.input}
          placeholder="  Last Name"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handleLName}
        />

        <TextInput
          style={styles.input}
          placeholder="  User Type"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handleType}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.register(
              this.state.email,
              this.state.password,
              this.state.fName,
              this.state.lName,
              this.state.accountType
            )
          }
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CreateAcc;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCBA03",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    height: 40,
    width: 150,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  },

  submitButton: {
    backgroundColor: "grey",
    padding: 10,
    margin: 15,
    height: 40
  }
});
