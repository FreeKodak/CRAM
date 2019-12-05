import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import StatsBar from "../components/StatsBar";
import ProfileContent from "../components/ProfileContent";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../config";

let userData = db.ref("/users/tutors");

class ViewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: null,
      firstName: null,
      lastName: null,
      Bio: "",
      rating: 4.0,
      class1: "",
      class2: "",
      class3: ""
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    this.setState({
      ID: JSON.stringify(navigation.getParam("ID", "NO-ID")),
      firstName: JSON.stringify(navigation.getParam("FN", "Name")),
      lastName: JSON.stringify(navigation.getParam("LN", "Name")),
      Bio: JSON.stringify(navigation.getParam("Bio", "Bio"))
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header fname={this.state.firstName} lname={this.state.lastName} />
        <StatsBar />
        <ProfileContent ID={this.state.ID} />
        <TouchableOpacity
          backgroundColor="white"
          style={styles.test}
          onPress={() => navigation.navigate("Chat")}
        >
          <Text style={styles.test}>
            Message me!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          backgroundColor="white"
          style={styles.test}
          onPress={() => console.log(this.state.ID)}
        >
          <Text>Get ID</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },

  test: {
    color: "white"
  }
});
