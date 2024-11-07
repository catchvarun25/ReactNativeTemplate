import React, { useMemo, useState } from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./VMTextField.scss";

interface IVMTextField extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  titleText?: string;
  showClearButton?: boolean;
}

const VMTextField = (props: IVMTextField) => {
  const { style, titleText, placeholder, onChangeText } = props;
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const calculatedTitleText = useMemo(() => {
    const flag = titleText ?? (text.length > 0 ? placeholder : "");
    return flag;
  }, [titleText, text, placeholder]);

  const showClearButton = useMemo(() => {
    return text && text.length > 0 && isFocused;
  }, [text, isFocused]);

  const handleTextChange = (newText: string) => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.titleText}>{calculatedTitleText}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          placeholder={placeholder}
          style={styles.textInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={handleTextChange}
        />
        {showClearButton && (
          <TouchableOpacity
            onPress={() => setText("")}
            style={styles.clearButton}
          />
        )}
      </View>
    </View>
  );
};

export default VMTextField;
