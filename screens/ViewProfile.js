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
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-betweem' }}>
          <View style={{ paddingLeft: '10%', paddingRight: '5%', paddingTop: 16 }}>
            <TouchableOpacity style={styles.but1} onPress={() => navigation.navigate("Chat")}>
              <Text style={{ color: 'white' }}>Available Now</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: '5%', paddingRight: '10%', paddingTop: 16 }}>
            <TouchableOpacity style={styles.but2} onPress={() => navigation.navigate("Cdr")}>
              <Text style={{ color: 'white' }}>Book a Session</Text>
            </TouchableOpacity>
          </View>
        </View>

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
  },
  but1: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
  but2: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  }
});
