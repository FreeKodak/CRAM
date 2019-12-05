import React from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import BottomBar2 from "../components/BottomBar2";
import PresentationalComponent from "../components/PresentationalComponent";
import { Overlay } from "react-native-elements";

// I'll make this prettier later i know its ugly
export default class TutorScreen extends React.Component {
  // -------------------- Comment this out once Profile page is made
  //
  // goProfile = () => {
  //     const { navigate } = this.props.navigation;
  //     navigate("Profile");
  // }
  // --------------------- And add this to the button for viewing profile
  //
  // onPress={() => this.goProfile()}
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  showWarning = () => {
    this.state.isVisible
      ? this.setState({ isVisible: false })
      : this.setState({ isVisible: true });
  };

  render() {
    return (
      <>
        <View style={PresentationalComponent.TutorScreen_container}>
          <TouchableOpacity style={PresentationalComponent.TutorScreen_tutbut}>
            <Text style={PresentationalComponent.TutorScreen_butText}>
              Manage Appointments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={PresentationalComponent.TutorScreen_tutbut}>
            <Text style={PresentationalComponent.TutorScreen_butText}>
              Set Availability
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={PresentationalComponent.TutorScreen_tutbut}
            onPress={() => this.showWarning()}
          >
            <Text style={PresentationalComponent.TutorScreen_butText}>
              Check In
            </Text>
          </TouchableOpacity>
          <View>
            {this.state.isVisible ? (
              <Overlay
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
              >
                <Text>Doing this will display your location to app users!</Text>
              </Overlay>
            ) : (
                <View></View>
              )}
          </View>
        </View>
        <BottomBar2 nav={this.props.navigation} />
      </>
    );
  }
}
