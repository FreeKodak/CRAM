import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };

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

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;

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
