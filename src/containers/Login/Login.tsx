import React, { useEffect, useState } from "react";
import styles from "./Login.scss";
import { View, Text, SafeAreaView, useColorScheme } from "react-native";
import VMButton from "../../components/VMButton";
import VMTextField from "../../components/VMTextField";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { connect } from "react-redux";
import { IAppRootState } from "../../reducers";
import { ERequestStatus } from "../../utility/CommonInterface";
import { ILoginRequest } from "../../sagas/login/interface";
import Subtract from "../../assets/subtract.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  RootStackParamList,
  IScreenName,
} from "../../navigations/NavigationTypes";
import { Dispatch } from "redux";
import { requestMemberLogin } from "../../reducers/LoginReducers";

// LEARN: 1. NativeStackScreenProps to strongly type the props 
// passed to your screen component from the navigation system.
// Not-Strong Typed: props.navigation.navigate('ArticlesList');
// Strong Tped: props.navigation.navigate(IScreenName.ArticlesList);
// 2. Provides Autocomplete and Param Type Checks
// navigation.navigate('ArticleDetail'); // ❌ Missing required param `articleId`

export interface ILoginScreenProps
  extends NativeStackScreenProps<RootStackParamList, IScreenName.Login> {
  loginStatus: ERequestStatus;
  requestLogin: (payload: ILoginRequest) => void;
}

export const LoginScreen = (props: ILoginScreenProps) => {
  // navigation coming from NativeStackScreenProps
  const { requestLogin, loginStatus, navigation } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLogin = () => {
    // requestLogin({
    //   userName: userName,
    //   password: password,
    // });
    navigation.replace(IScreenName.ArticlesList);
  };

  useEffect(() => {
    if (loginStatus == ERequestStatus.SUCCESS) {
      navigation.navigate(IScreenName.ArticlesList);
    }
  }, [loginStatus]);

  return (
    <View style={styles.loginPage}>
      <Subtract width={"100%"} height={"55%"}></Subtract>
      <Text style={styles.message}>Login</Text>
      <View style={styles.container}>
        <VMTextField
          placeholder="Enter User Name"
          value={userName}
          onChangeText={setUserName}
        />
        <VMTextField
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
        />
        <VMButton
          title={"Log In"}
          containerStyle={styles.button}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state: IAppRootState) => {
  return {
    loginStatus: state.loginState.status,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestLogin: (payload: ILoginRequest) =>
      dispatch(requestMemberLogin(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
