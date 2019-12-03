import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PresentationalComponent from '../components/PresentationalComponent';
export default class Header extends React.Component {
  render() {
    return (
      <View style={PresentationalComponent.Header_headerBackground}>
        <View style={PresentationalComponent.Header_header}>
          <View style={PresentationalComponent.Header_profilepicWrap}>
            <Image
              style={PresentationalComponent.Header_profilepic}
              source={require("../branding/profileicon.jpg")}
            />
            <Text style={PresentationalComponent.Header_name}>THE BIGGEST HUSTLA</Text>
            <Text style={PresentationalComponent.Header_education}> - PhD IN THAT HONEY - </Text>
          </View>
        </View>
      </View>
    );
  }
}