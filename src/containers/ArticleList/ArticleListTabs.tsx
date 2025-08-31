import React from "react";
import { Text } from "react-native";
import { Colors } from "../../StyleVariables";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ENewsCategoryType } from "../../sagas/articleList/Interface";
import ArticleListContainer from "./ArticleListContainer";

const Tab = createMaterialTopTabNavigator();

const ArticleListTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        lazy: true,
        tabBarItemStyle: { width: "auto", height: 44 },
        tabBarStyle: { backgroundColor: Colors.antiqueWhite },
        tabBarIndicatorStyle: { backgroundColor: Colors.darkSalamon },
        tabBarActiveTintColor: Colors.darkSalamon,
        tabBarInactiveTintColor: Colors.jetBlack,
      }}
    >
      {Object.values(ENewsCategoryType).map((category) => {
        return (
          <Tab.Screen
            key={category}
            name={category}
            component={ArticleListContainer}
            initialParams={{ categoryType: category }}
            options={{
              tabBarLabel: ({ focused, color }) => (
                <Text
                  style={{
                    color,
                    fontWeight: focused ? "bold" : "normal",
                  }}
                >
                  {`${category}`.toUpperCase()}
                </Text>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default ArticleListTabs;
