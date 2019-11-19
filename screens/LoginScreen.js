import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class Inputs extends Component {
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
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
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

export default Inputs;

const styles = StyleSheet.create({
  container: {},

  input: {},

  submitButton: {}
});
