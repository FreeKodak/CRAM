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
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";

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
      .once("value", function (snapshot) {
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
    const { navigate } = this.props.nav;
    return (
      <ScrollView>
        <View>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Bio goes here</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-betweem' }}>
            <View style={{ paddingLeft: '10%', paddingRight: '5%', paddingTop: 16 }}>
              <TouchableOpacity style={styles.but1} onPress={() => navigate("Chat")}>
                <Text style={{ color: 'white' }}>Available Now</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: '5%', paddingRight: '10%', paddingTop: 16 }}>
              <TouchableOpacity style={styles.but2} onPress={() => navigate("Cdr")}>
                <Text style={{ color: 'white' }}>Book a Session</Text>
              </TouchableOpacity>
            </View>
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
  },

  textWrap: {
    alignItems: "center"
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
