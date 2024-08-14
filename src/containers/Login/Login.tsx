import React from "react";
import styles from "./Login.scss";
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  TextInput,
} from "react-native";
import VMButton from "../../components/VMButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Login = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <View style={styles.loginPage}>
        <Text
          style={[
            styles.message,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}
        >
          Welcome to Login Page
        </Text>
        <View style={styles.container}>
          <TextInput placeholder="Enter User Name" style={styles.userName} />
          <TextInput placeholder="Enter Password" style={styles.password} />
          <VMButton title={"Log In"} containerStyle={styles.button} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
