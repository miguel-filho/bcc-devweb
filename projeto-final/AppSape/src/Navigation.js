import { createStackNavigator } from "react-navigation";

export default createStackNavigator(
  {
    Home: {
      screen: require("./views/Login").default
    }
  },
  {
    initialRouteName: "Home"
  }
);
