import React from "react";
import { View, Text } from "react-native";
import FastImage from "react-native-fast-image";
import style from "./VMArticleListItem.scss";
import { IArticleItemResponse } from "../sagas/articleList/Interface";

type TArticlehandler = (articleUrl: string) => void;

export interface IVMArticleListItem {
  itemData: IArticleItemResponse;
  didSelectArticle: TArticlehandler;
}

const VMArticleListItem = (props: IVMArticleListItem) => {
  //Because source is optional property so giving empty object as default value
  const {
    itemData: {
      urlToImage: imageUrl,
      title,
      description,
      author,
      source: { name: sourceName } = {},
      publishedAt,
    },
    didSelectArticle,
  } = props;

  return (
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
        <Text style={style.description}>{description}</Text>
        <Text style={style.author}>
          {author} from {sourceName}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(VMArticleListItem);
