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
  constructor(props) {
    super(props);
    this.state = { currentUser: "" };
    this.getuser = this.getuser.bind(this);
  }

  //grabs all data from the users
  readUserData() {
    firebase
      .database()
      .ref("users/")
      .once("value", function(snapshot) {
        console.log(snapshot.val());
      });
  }

  //grabs the ID of the logged in user and assigns it to the state
  getuser() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user.uid });
        console.log(this.state.currentUser);
      } else {
        console.log("WE ERRED BOIS");
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Stuff here</Text>
            <Button onPress={this.getuser} title="USER PLEASE"></Button>
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
  },
  text: {
    color: "white"
  }
});
