import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import firebase from "firebase";

class ProfileContent extends React.Component {
  state = {
    user: ""
  };

  readUserData() {
    firebase
      .database()
      .ref("users/")
      .once("value", function(snapshot) {
        console.log(snapshot.val());
      });
  }

  // handleUser(input) {
  //   this.setState({ user: input });
  // }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    console.log(currentUser);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Stuff here</Text>
          <View style={styles.textWrap}>
            <Button onPress={this.componentDidMount} title="TEST"></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});
