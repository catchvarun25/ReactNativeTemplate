import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, IScreenName } from "./NavigationTypes";
import LoginScreen from "../containers/Login/Login";
import ArticleListContainer from "../containers/ArticleList/ArticleListContainer";
import ArticleDetailsContainer from "../containers/ArticleList/ArticleDetailsContainer";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={IScreenName.Login}>
        <Stack.Screen
          name={IScreenName.Login}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={IScreenName.ArticlesList}
          component={ArticleListContainer}
        />
        <Stack.Screen
          name={IScreenName.ArticleDetails}
          component={ArticleDetailsContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
