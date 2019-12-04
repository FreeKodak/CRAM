import React from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";
import BottomBar from "../components/BottomBar";
import ListScreen from "../screens/ListScreen";

export default class MapScreen extends React.Component {
  state = {
    userLocation: {
      latitude: 51.0447,
      longitude: 114.0719,
      latitudeDelta: 0.0105,
      longitudeDelta: 0.0096
    },
    show: true,
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0102,
            longitudeDelta: 0.0091
          },
          show: false
        });
      },
      err => console.log(err)
    );
    console.log(this.state.userLocation);
  };

  goList = () => {
    const { navigate } = this.props.navigation;
    navigate("List");
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to CRAM!</Text>
          <View style={styles.hider}>
            {this.state.show ? (
              <FetchLocation onGetLocation={this.getUserLocationHandler} />
            ) : (
                <View style={styles.sbar}>

                  <TouchableOpacity
                    style={styles.listButton}
                    onPress={() => this.goList()}
                  >
                    <Text style={styles.listButton_text}>Find A Tutor</Text>
                  </TouchableOpacity>
                </View>
              )}
          </View>
          <UsersMap userLocation={this.state.userLocation} />

        </View>
        <BottomBar nav={this.props.navigation} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 28
  },
  hider: {},
  sbar: {
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 4
  },
  listButton: {
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
  listButton_text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  }
});
