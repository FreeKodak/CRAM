import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
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
    age: 0,
    education: "",
    motive: "",
    accountType: "Tutor",
    userID: ""
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

  handleAge = text => {
    this.setState({ age: text });
  };

  handleMotive = text => {
    this.setState({ motive: text });
  };

  handleEducation = text => {
    this.setState({ education: text });
  };

  getuser() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userID: user.uid });
        console.log("Here:" + this.state.userID);
      } else {
        console.log("WE ERRED BOIS");
      }
    });
  }

  async register(email, pass) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
      alert(
        "Application Submitted! Please allow up to a week for application to be processed."
      );
      this.getuser();
    } catch (error) {
      alert(error.toString());
    }
  }

  writeUserData(fname, lname, usertype, email, motive) {
    firebase
      .database()
      .ref("users/tutors/" + this.state.userID)
      .set({
        fname,
        lname,
        usertype,
        email,
        motive
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
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.Reg}>Registration Form</Text>
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

          <TextInput style={styles.input} placeholder="Password*" />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password*"
            onChangeText={this.handlePassword}
          />

          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={this.handleAge}
          />

          <Text>What year are you in?</Text>
          <TextInput
            style={styles.input}
            placeholder="Education Level*"
            onChangeText={this.handleEducation}
          />

          <Text>Please upload your most recent transcript.*</Text>
          <Button title="Choose Photo" />

          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Motivation Statement*"
            onChangeText={this.handleMotive}
          />

          <Text>*Required Fields</Text>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.register(this.state.email, this.state.password)}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() =>
              this.writeUserData(
                this.state.fName,
                this.state.lName,
                this.state.accountType,
                this.state.email,
                this.state.motive
              )
            }
          >
            <Text>Continue</Text>
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
    height: 1000,
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
