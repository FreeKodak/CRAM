import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import firebase from "firebase";
import { func } from "prop-types";
import PresentationalComponent from '../components/PresentationalComponent';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      firstName: "first",
      lastName: "last",
      education: ""
    };
    this.getuserID = this.getuserID.bind(this);
  }

  //grabs the ID of the logged in user and assigns it to the state
  getuserID() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user.uid });
      } else {
        console.log("WE ERRED BOIS");
      }
    });
  }

  render() {
    return (
      <View style={styles.headerBackground}>
        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image
              style={styles.profilepic}
              source={require("../branding/profileicon.jpg")}
            />
            <Text style={styles.name}>
              {this.props.fname + " " + this.props.lname}
            </Text>
            <Text style={styles.education}> - PhD IN THAT HONEY - </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)"
  },

  profilepicWrap: {
    width: 260,
    height: 300,
    borderRadius: 100,
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 16
  },

  profilepic: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 4
  },

  name: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },

  education: {
    fontSize: 14,
    color: "#0394c0",
    fontWeight: "300",
    fontStyle: "italic"
  }
});
