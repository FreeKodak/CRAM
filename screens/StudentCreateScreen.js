import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";

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

        <Text>What are you currently majoring in?</Text>
        <TextInput style={styles.input} placeholder="Major" />

        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StudentCreateScreen;

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
