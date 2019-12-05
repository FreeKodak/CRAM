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
      class3: "",
      // status = null
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    this.setState({
      ID: JSON.stringify(navigation.getParam("ID", "NO-ID")),
      firstName: JSON.stringify(navigation.getParam("FN", "Name")),
      lastName: JSON.stringify(navigation.getParam("LN", "Name")),
      Bio: JSON.stringify(navigation.getParam("Bio", "Bio")),
      status: JSON.stringify(navigation.getParam("avail", 'false'))
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header fname={this.state.firstName} lname={this.state.lastName} />
        <StatsBar onPress={console.log(this.state.status)} />
        <ProfileContent ID={this.state.ID} nav={this.props.navigation} avail={this.state.status} />
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
