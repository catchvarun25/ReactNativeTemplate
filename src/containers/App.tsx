import React from "react";
import { Provider } from "react-redux";
import store from "../store"; // Adjust the path to your store
import AppNavigator from "../navigations/AppNavigator"; // Your app's navigation
import { GestureHandlerRootView } from "react-native-gesture-handler"; //For managing gestures in app
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <AppNavigator />
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
