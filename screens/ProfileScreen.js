import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import StatsBar from "../components/StatsBar";
import ProfileContent from "../components/ProfileContent";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../config";

let userData = db.ref("/users/tutors");

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      firstName: "",
      lastName: "",
      Bio: "",
      Type: ""
    };
    this.getuser = this.getuser.bind(this);
  }

  static navigationOptions = {
    title: 'Profle',
    headerStyle: {
      backgroundColor: '#000',
    }
  }

  readUserData() {
    firebase
      .database()
      .ref("users/")
      .once("value", function (snapshot) {
        console.log(snapshot.val());
      });
  }

  getuser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Inside ID: " + user.uid);
        this.setState({ currentUser: user.uid });
        console.log("ID: " + this.state.currentUser);
      } else {
        alert("Not logged in!");
      }
    });
  };

  componentWillMount() {
    this.getuser();

    userData.on("value", snapshot => {
      let data = snapshot.val();
      let inside = Object.values(data);
      let userID = this.state.currentUser;
      var tempFName = "";
      var tempLName = "";
      var tempBio = "";
      inside.forEach(function (item, index) {
        if (inside[index]["ID"] == userID) {
          tempFName = inside[index]["fname"];
          tempLName = inside[index]["lname"];
          tempBio = inside[index]["Bio"];
          console.log(inside[index]["ID"]);
        } else {
          console.log("NOT IT");
        }
      });
      this.setState({ lastName: tempLName });
      this.setState({ firstName: tempFName });
      this.setState({ Bio: tempBio });

      console.log(this.state);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header fname={this.state.firstName} lname={this.state.lastName} />
        <StatsBar />
        <ProfileContent />
        <TouchableOpacity onPress={console.log(this.state.lastName)}>
          <Text style={styles.test}>Please Maam</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },

  test: {
    color: "white"
  }
});
