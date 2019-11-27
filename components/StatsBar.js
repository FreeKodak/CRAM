import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

class StatsBar extends React.Component {
  render() {
    return (
      <View style={styles.bar}>
        <View style={[styles.barItem, styles.barSeparator]}>
          <Text style={styles.barTop}>Subjects</Text>
          <Text style={styles.barBottom}>Math,Chemistry</Text>
        </View>

        <View style={styles.barItem}>
          <Text style={styles.barTop}>Rating</Text>
          <Text style={styles.barBottom}>3.7</Text>
        </View>
      </View>
    );
  }
}

export default StatsBar;

const styles = StyleSheet.create({
  bar: {
    borderTopColor: "#fff",
    borderTopWidth: 4,
    backgroundColor: "#FCBA03",
    flexDirection: "row"
  },

  barSeparator: {
    borderRightWidth: 4
  },

  barItem: {
    flex: 1,
    padding: 18,
    alignItems: "center"
  },

  barTop: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic"
  },

  barBottom: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  }
});
