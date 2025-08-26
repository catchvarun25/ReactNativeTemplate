import React from "react";
import { Provider } from "react-redux";
import store from "../store"; // Adjust the path to your store
import AppNavigator from "../navigations/AppNavigator"; // Your app's navigation
import { GestureHandlerRootView } from "react-native-gesture-handler"; //For managing gestures in app
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <BottomSheetModalProvider>
            <AppNavigator />
          </BottomSheetModalProvider>
        </Provider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
