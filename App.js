import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';


export default class App extends React.Component {

  state = {
    userLocation: null
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }
      })
    }, err => console.log(err));
  }
  
  render() {
  return (
    <View style={styles.container}>
      <Text>Welcome to CRAM!</Text>
        <FetchLocation onGetLocation = {this.getUserLocationHandler} /> 
        <UsersMap userLocation={this.state.userLocation} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
