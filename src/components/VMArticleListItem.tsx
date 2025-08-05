import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import style from "./VMArticleListItem.scss";
import { IArticleItemResponse } from "../sagas/articleList/Interface";

type TArticlehandler = (article: IArticleItemResponse) => void;

export interface IVMArticleListItem {
  itemData: IArticleItemResponse;
  didSelectArticle: TArticlehandler;
}

const VMArticleListItem = React.memo((props: IVMArticleListItem) => {
  //Because source is optional property so giving empty object as default value
  const [pressed, onPressed] = useState(false);
  const { itemData, didSelectArticle } = props;
  const {
    urlToImage: imageUrl,
    title,
    author,
    source: { name: sourceName } = {},
  } = itemData;

  return (
    <TouchableOpacity
      onPressIn={() => onPressed(true)}
      onPressOut={() => onPressed(false)}
      onPress={() => {
        didSelectArticle(itemData);
      }}
    >
      <View style={style.container}>
        <FastImage
          style={style.image}
          source={{
            uri: imageUrl,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={style.content}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.author}>
            {"-"}
            {author} from {sourceName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default React.memo(VMArticleListItem);
