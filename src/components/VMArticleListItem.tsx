import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import FastImage from "react-native-fast-image";
import style from "./VMArticleListItem.styles";
import { IArticleItemResponse } from "../sagas/articleList/Interface";
import { ELayoutMode } from "../utility/CommonInterface";

type TArticlehandler = (article: IArticleItemResponse) => void;

export interface IVMArticleListItem {
  itemData: IArticleItemResponse;
  layoutMode: ELayoutMode;
  didSelectArticle: TArticlehandler;
}

const VMArticleListItem = React.memo((props: IVMArticleListItem) => {
  const [pressed, onPressed] = useState(false);
  const { itemData, didSelectArticle, layoutMode } = props;
  //Because source is optional property so giving empty object as default value
  const {
    urlToImage: imageUrl,
    title,
    author,
    source: { name: sourceName } = {},
  } = itemData;

  return (
    <Pressable
      onPressIn={() => onPressed(true)}
      onPressOut={() => onPressed(false)}
      onPress={() => {
        didSelectArticle(itemData);
      }}
    >
      <View
        style={
          layoutMode === ELayoutMode.LANDSCAPE
            ? style.containerLandscape
            : style.containerPortrait
        }
      >
        <FastImage
          style={
            layoutMode === ELayoutMode.LANDSCAPE
              ? style.imageLandscape
              : style.imagePortrait
          }
          source={{
            uri: imageUrl,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View
          style={
            layoutMode === ELayoutMode.LANDSCAPE
              ? style.contentLandscape
              : style.contentPortrait
          }
        >
          <Text style={style.title}>{title}</Text>
          <Text style={style.author}>
            {"-"}
            {author} from {sourceName}
          </Text>
        </View>
      </View>
    </Pressable>
  );
});

export default React.memo(VMArticleListItem);
