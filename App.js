"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MapScreen from "./screens/MapScreen";
import ListScreen from "./screens/ListScreen";

const MainNavigatior = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Map: { screen: MapScreen },
  List: { screen: ListScreen },
});

const App = createAppContainer(MainNavigatior);

export default App;
