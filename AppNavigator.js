import { createStackNavigator } from "react-navigation-stack";
import Home from "./screens/Home";

const AppNavigator = createStackNavigator({
  Home: { screen: Home }
});

export default AppNavigator;
