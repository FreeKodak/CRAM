import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default StyleSheet.create({
  myState: {
    marginTop: 20,
    textAlign: "center",
    color: "grey",
    fontWeight: "bold",
    fontSize: 20
  },
  Header_headerBackground: {
    flex: 1,
    alignSelf: "center",
  },
  Header_header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  Header_profilepicWrap: {
    width: 260,
    height: 300,
    borderRadius: 100,
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 16,
    flexDirection: "column",
    alignItems: "center",
  },
  Header_profilepic: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 4
  },
  Header_name: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  Header_education: {
    fontSize: 14,
    color: "#0394c0",
    fontWeight: "300",
    fontStyle: "italic"
  },
  TutorScreen_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  TutorScreen_tutbut: {
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
  TutorScreen_butText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
});
