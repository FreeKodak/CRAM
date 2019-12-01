import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class StudentCreateScreen extends Component {
  state = {
    email: "",
    password: "",
    fName: "",
    lName: "",
    accountType: "Student"
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

      const { navigate } = this.props.navigation;
      navigate("Map");
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
          <TextInput style={styles.input} placeholder="University*" />

          <TextInput style={styles.input} placeholder="Year" />

          <TextInput style={styles.input} placeholder="Major" />

          <TextInput style={styles.input} placeholder="Course Interests" />

          <Text>*Required Fields</Text>

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

export default StudentCreateScreen;

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
    width: 150,
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
  },
  Reg: {
    width: 300,
    height: 70,
    fontSize: 35,
    fontWeight: "bold"
  }
});
