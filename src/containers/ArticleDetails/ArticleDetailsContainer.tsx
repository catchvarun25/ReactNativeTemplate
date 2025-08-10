import React, { useRef } from "react";
import FastImage from "react-native-fast-image";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "./ArticleDetailsContainer.scss";
import {
  IScreenName,
  RootStackParamList,
} from "../../navigations/NavigationTypes";
import {
  TapGestureHandler,
  HandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ArticleDetailsDrawerView from "./ArticleDetailsDrawerView";

export interface IArticleDetailsContainer
  extends NativeStackScreenProps<
    RootStackParamList,
    IScreenName.ArticleDetails
  > {}

const ArticleDetailsContainer = (props: IArticleDetailsContainer) => {
  const { selectedArticle } = props.route.params;
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const showCompleteArticle = (event: HandlerStateChangeEvent) => {
    if (event.nativeEvent.state == State.ACTIVE) {
      console.log("Presenting BottomSheetModal");
      bottomSheetRef.current?.present();
    }
  };

  return (
    <>
      <TapGestureHandler
        numberOfTaps={2}
        onHandlerStateChange={showCompleteArticle}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <FastImage
              source={{
                uri: selectedArticle.urlToImage,
                priority: FastImage.priority.normal,
              }}
              style={{ flex: 1 }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{selectedArticle.title}</Text>
            <Text style={styles.descriptionDetail}>
              {selectedArticle.description}
            </Text>
          </View>
        </View>
      </TapGestureHandler>
      <ArticleDetailsDrawerView
        articleItem={selectedArticle}
        ref={bottomSheetRef}
      />
    </>
  );
};

export default ArticleDetailsContainer;
