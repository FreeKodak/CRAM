import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity
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
        <View onPress={console.log("Made it: " + this.props.status)}>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Stuff here</Text>
            <View style={{ padding: 10 }}>
              {this.props.status ?
                (<TouchableOpacity
                  backgroundColor="green"
                  style={styles.but}
                  onPress={() => navigate("Chat")}
                >
                  <Text style={{ color: 'white' }}>
                    Available Now
                </Text>
                </TouchableOpacity>) : <TouchableOpacity
                  backgroundColor="red"
                  style={styles.but}
                  onPress={() => navigate("Chat")}
                >
                  <Text style={{ color: 'white' }}>
                    Not Available
                </Text>
                </TouchableOpacity>
              }
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={styles.but}
                onPress={() => navigate("Avail")}
              >
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
    backgroundColor: '#463F3A',
  },
  text: {
    color: "white"
  },
  but: {
    backgroundColor: '#8A817C',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    // paddingBottom: 20,
  }
});
