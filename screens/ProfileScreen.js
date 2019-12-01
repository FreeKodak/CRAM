import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import StatsBar from "../components/StatsBar";
import ProfileContent from "../components/ProfileContent";

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <StatsBar />
        <ProfileContent />
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});
