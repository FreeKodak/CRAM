import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const usersMap = props => {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} region={props.userLocation}>
        <MapView.Marker coordinate={props.userLocation}  />
        <MapView.Marker coordinate={ {
          latitude: 51.0776,
          longitude: -114.1407,}}
          pinColor = {'#FCBA03'}/>
        <MapView.Marker coordinate={ {
          latitude: 51.075,
          longitude: -114.14,}}
          pinColor = {'#FCBA03'}/>

        <MapView.Marker coordinate={ {
          latitude: 51.075,
          longitude: -114.13,}}
          pinColor = {'#FCBA03'}/>
        <MapView.Marker coordinate={ {
          latitude: 51.08,
          longitude: -114.13,}} 
          pinColor = {'#FCBA03'}/>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 400
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
export default usersMap;

