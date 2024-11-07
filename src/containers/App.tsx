import React from "react";
import { Provider } from "react-redux";
import store from "../store"; // Adjust the path to your store
import AppNavigator from "../navigations/AppNavigator"; // Your app's navigation

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
