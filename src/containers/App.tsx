import React from "react";
import { Provider } from "react-redux";
import store from "../store"; // Adjust the path to your store
import AppNavigator from "../navigations/AppNavigator"; // Your app's navigation
import { DevSettings, NativeModules } from "react-native";
const App = () => {
  // eslint-disable-next-line require-await
  const main = async () => {
    const message = {
      stop: "Stop Debugging",
      debug: "Debug JS Remotely",
    };

    DevSettings.addMenuItem(message.debug, () => {
      NativeModules.DevSettings.setIsDebuggingRemotely(true);
    });
    DevSettings.addMenuItem(message.stop, () => {
      NativeModules.DevSettings.setIsDebuggingRemotely(false);
    });
  };
  setTimeout(async () => {
    await main();
  }, 200);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
