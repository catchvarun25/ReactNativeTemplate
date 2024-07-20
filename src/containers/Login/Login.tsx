import React from 'react';
import styles from './Login.scss';
import {View, Text, SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={[
            styles.message,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          Welcome to Login Page
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
