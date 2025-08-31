import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ENewsCategoryType } from "../../sagas/articleList/Interface";
import ArticleListContainer from "./ArticleListContainer";
import React from "react";

const Tab = createMaterialTopTabNavigator();

const ArticleListTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true, lazy: true }}>
      {Object.values(ENewsCategoryType).map((category) => {
        return (
          <Tab.Screen
            key={category}
            name={category}
            component={ArticleListContainer}
            initialParams={{ categoryType: category }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default ArticleListTabs;
