import React, { forwardRef, useState } from "react";
import { View } from "react-native";
import styles from "./ArticleDetailsDrawerView.scss";
import VMDrawerView from "../../components/VMDrawerView";
import VMActivityLoader from "../../components/VMActivityLoader";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IArticleItemResponse } from "../../sagas/articleList/Interface";
import WebView from "react-native-webview";
import { ERequestStatus } from "../../utility/CommonInterface";

export interface IArticleDetailsDrawerView {
  articleItem: IArticleItemResponse;
}

const ArticleDetailsDrawerView = forwardRef<
  BottomSheetModal,
  IArticleDetailsDrawerView
>((props, ref) => {
  const { articleItem } = props;
  const [loadingState, setLoadingState] = useState<ERequestStatus>(
    ERequestStatus.NONE
  );
  const renderWebView = () => (
    <WebView
      style={styles.webContainer}
      source={{ uri: articleItem.url || "" }}
      onLoad={() => {
        setLoadingState(ERequestStatus.SUCCESS);
      }}
      onLoadStart={() => {
        setLoadingState(ERequestStatus.INPROGRESS);
      }}
      onError={() => {
        setLoadingState(ERequestStatus.FAILED);
      }}
    />
  );

  return (
    <VMDrawerView
      ref={ref}
      showDismissButton
      enableSwipeDownToDismiss
      children={
        <View style={styles.contentContainer}>
          {loadingState !== ERequestStatus.SUCCESS && <VMActivityLoader />}
          {renderWebView()}
        </View>
      }
    />
  );
});

export default React.memo(ArticleDetailsDrawerView);
