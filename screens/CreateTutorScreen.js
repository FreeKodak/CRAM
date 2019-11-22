import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import * as firebase from "firebase";
// import ImagePicker from "react-native-image-picker"

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
      this.writeUserData(fname, lname);
      alert("Account Created!");
    } catch (error) {
      alert(error.toString());
    }
  }

  writeUserData(fname, lname) {
    firebase
      .database()
      .ref("users/")
      .push({
        fname,
        lname
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
          placeholder="First Name"
          onChangeText={this.handleFName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={this.handleLName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={this.handleEmail}
        />

        <Text>
          What university are you currently enrolled in or have graduated from?
        </Text>
        <TextInput style={styles.input} placeholder="University" />

        <Text>What year are you in?</Text>
        <TextInput style={styles.input} placeholder="Year" />

        <Text>Please upload your most recent transcript.</Text>
        <Button title="Choose Photo" />
      </View>
    );
  }
}

export default CreateTutorScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCBA03",
    flex: 1,
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
    margin: 15
  },

  submitButton: {
    backgroundColor: "grey",
    padding: 10,
    margin: 15,
    height: 40
  }
});
