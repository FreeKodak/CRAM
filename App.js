"use strict";
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const MainNavigatior = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen }
});

const App = createAppContainer(MainNavigatior);

export default App;
