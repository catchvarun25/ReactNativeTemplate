import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableHighlightProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import styles from "./VMButton.scss";
import Icon from "react-native-vector-icons/MaterialIcons";

export interface IVMButton extends TouchableHighlightProps {
  title?: string;
  isRounded?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  leftIconStyle?: ViewStyle;
  rightIconStyle?: ViewStyle;
}

const VMButton = (props: IVMButton) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      <View style={styles.contentStyle}>
        {props.leftIcon && (
          <Icon
            style={[styles.leftIcon, props.leftIconStyle]}
            name={props.leftIcon}
          />
        )}
        {props.title && (
          <Text style={[styles.title, props.titleStyle]}> {props.title} </Text>
        )}
        {props.rightIcon && (
          <Icon
            style={[styles.rightIcon, props.rightIconStyle]}
            name={props.rightIcon}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default VMButton;
