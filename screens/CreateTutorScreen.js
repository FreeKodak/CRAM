import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as firebase from "firebase";
//import ImagePicker from "react-native-image-picker"
//import CameraRollPicker from "react-native-camera-roll-picker"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class CreateTutorScreen extends Component {
  state = {
    email: "",
    password: "",
    fName: "",
    lName: "",
    accountType: "Tutor"
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

  async register(email, pass, fname, lname) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
      this.writeUserData(fname, lname, this.state.accountType);
      alert("Account Created!");
    } catch (error) {
      alert(error.toString());
    }
  }

  writeUserData(fname, lname, usertype) {
    firebase
      .database()
      .ref("users/")
      .push({
        fname,
        lname,
        usertype
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
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.Reg}>
            Registration Form
          </Text>
          <TextInput
            style={styles.input}
            placeholder="First Name*"
            onChangeText={this.handleFName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name*"
            onChangeText={this.handleLName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address*"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password*"
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password*"
            onChangeText={this.handlePassword}
          />

          <TextInput style={styles.input} placeholder="Age" />

          <Text>What year are you in?</Text>
          <TextInput style={styles.input} placeholder="Education Level*" />

          <Text>Please upload your most recent transcript.*</Text>
          <Button title="Choose Photo" />

          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Motivation Statement*" />

          <Text>
            *Required Fields
          </Text>
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
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateTutorScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCBA03",
    flex: 1,
    height: 800,
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    height: 40,
    width: 200,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    margin: 15
  },

  submitButton: {
    backgroundColor: "grey",
    padding: 10,
    margin: 15,
    height: 40
  },

  Reg: {
    width: 300,
    height: 70,
    fontSize: 35,
    fontWeight: "bold"

  }

});
