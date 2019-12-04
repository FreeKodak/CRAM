import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import firebase from "firebase";
import { func } from "prop-types";
import PresentationalComponent from '../components/PresentationalComponent';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      currentUser: "",
      firstName: "first",
      lastName: "last",
      education: ""
    };
    this.getUserData = this.getUserData.bind(this);

    this.getuserID = this.getuserID.bind(this);

    this.setLastName = this.setLastName.bind(this);
  }

  //grabs the ID of the logged in user and assigns it to the state
  getuserID() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user.uid });
        console.log(this.state.currentUser);
      } else {
        console.log("WE ERRED BOIS");
      }
    });
  }

  getUserData() {
    var userId = firebase.auth().currentUser.uid;

    return firebase
      .database()
      .ref("users/tutors/" + userId + "/fname")
      .once("value")
      .then(function (snapshot) {
        var fname = snapshot.val();
        this.setLastName(fname);
      });

    // const { fname } = firebase
    //   .database()
    //   .ref("users/tutors/" + userId + "/fname");
    // this.setState({ firstName: fname });

    // var lname = firebase.database().ref("users/tutors/" + userId + "/lname");

    // console.log(lname);

    // lname.on("value", function(snapshot) {
    //   setLastName(snapshot.val());
    // });
  }

  setLastName(name) {
    this.setState({ firstName: name });
  }

  // componentWillMount() {
  //   this.getuserID();
  //   this.getUserData();
  //   console.log(this.state.firstName);
  //   console.log(this.state.lastName);
  // }

  render() {
    return (
      <View style={PresentationalComponent.Header_headerBackground}>
        <View style={PresentationalComponent.Header_header}>
          <View style={PresentationalComponent.Header_profilepicWrap}>
            <Image
              style={PresentationalComponent.Header_profilepic}
              source={require("../branding/profileicon.jpg")}
            />
            <Text style={PresentationalComponent.Header_name}>
              {this.state.firstName + " " + this.state.lastName}
            </Text>
            <Text style={PresentationalComponent.Header_education}> - PhD IN THAT HONEY - </Text>
          </View>
        </View>
      </View>
    );
  }
}