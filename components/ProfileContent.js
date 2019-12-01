import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";

class ProfileContent extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text>Now we put the content here</Text>
          <View style={styles.textWrap}>
            <TextInput></TextInput>
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
  }
});
