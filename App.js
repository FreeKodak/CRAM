"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAccScreen from "./screens/CreateAccScreen";
import CreateTutorScreen from "./screens/CreateTutorScreen";
import StudentCreateScreen from "./screens/StudentCreateScreen";

const MainNavigatior = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  CreateAcc: { screen: CreateAccScreen },
  CreateTutor: { screen: CreateTutorScreen },
  StudentCreate: { screen: StudentCreateScreen }
});

const App = createAppContainer(MainNavigatior);

export default App;
