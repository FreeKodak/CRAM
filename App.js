"use strict";
import React, { Component } from "react";
import * as firebase from "firebase";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAccScreen from "./screens/CreateAccScreen";
import CreateTutorScreen from "./screens/CreateTutorScreen";
import StudentCreateScreen from "./screens/StudentCreateScreen";
import ListScreen from "./screens/ListScreen";
import ProfileScreen from "./screens/ProfileScreen";

import MapScreen from "./screens/MapScreen";
import TutorScreen from "./screens/TutorScreen";
import CdrTest from "./screens/CdrTest";
import ViewProfile from "./screens/ViewProfile";
import { db } from "./config";

// firebase.initializeApp({
//   apiKey: "AIzaSyCvXlvAEtNjCvtt8kquDYrSi4JOqGLZr2c",
//   authDomain: "cramapp-2997f.firebaseapp.com",
//   databaseURL: "https://cramapp-2997f.firebaseio.com",
//   storageBucket: "cramapp-2997f.appspot.com"
// });

const MainNavigatior = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  CreateAcc: { screen: CreateAccScreen },
  CreateTutor: { screen: CreateTutorScreen },
  StudentCreate: { screen: StudentCreateScreen },
  Map: { screen: MapScreen },
  List: { screen: ListScreen },
  Profile: { screen: ProfileScreen },
  Tutor: { screen: TutorScreen },
  Cdr: { screen: CdrTest },
  ViewProfile: { screen: ViewProfile }
});

const App = createAppContainer(MainNavigatior);

export default App;
