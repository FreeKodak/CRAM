"use strict";
import React, { Component } from "react";
import * as firebase from "firebase";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAcc from "./screens/CreateAcc";

firebase.initializeApp({
  apiKey: "AIzaSyCvXlvAEtNjCvtt8kquDYrSi4JOqGLZr2c",
  authDomain: "cramapp-2997f.firebaseapp.com",
  databaseURL: "https://cramapp-2997f.firebaseio.com",
  storageBucket: "cramapp-2997f.appspot.com"
});

const MainNavigatior = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register: { screen: CreateAcc }
});

const App = createAppContainer(MainNavigatior);

export default App;
