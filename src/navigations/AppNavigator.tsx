import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, IScreenName } from "./NavigationTypes";
import LoginScreen from "../containers/Login/Login";
import ArticleListContainer from "../containers/ArticleList/ArticleListContainer";
import ArticleDetailsContainer from "../containers/ArticleDetails/ArticleDetailsContainer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { setStorage, EStorageKeys, getStorage } from "../utility/storage";
import { ELayoutMode } from "../utility/CommonInterface";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const toggleLayoutMode = () => {
    const layoutMode = getStorage<ELayoutMode>(EStorageKeys.LayoutMode);
    if (layoutMode == null || layoutMode === ELayoutMode.LANDSCAPE) {
      setStorage(EStorageKeys.LayoutMode, ELayoutMode.PORTRAIT);
    } else {
      setStorage(EStorageKeys.LayoutMode, ELayoutMode.LANDSCAPE);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={IScreenName.Login}
        screenOptions={{
          headerTintColor: "black", // 👈 changes back button + header text color
          headerBackTitleVisible: false, // 👈 hides the label
        }}
      >
        <Stack.Screen
          name={IScreenName.Login}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={IScreenName.ArticlesList}
          component={ArticleListContainer}
          options={({ navigation }) => ({
            headerShown: true,
            title: "Top News",
            headerLeft: () => (
              <Icon
                style={{ color: "darksalmon" }}
                name="account-circle"
                size={24}
                onPress={() => navigation.navigate(IScreenName.Profile)}
              />
            ),
            headerRight: () => (
              <Icon
                name="view-grid"
                style={{ color: "darksalmon" }}
                size={24}
                onPress={toggleLayoutMode}
              />
            ),
          })}
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
