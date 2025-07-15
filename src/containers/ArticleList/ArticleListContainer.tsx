import React, { useEffect, useCallback } from "react";
import { IAppRootState } from "../../reducers";
import styles from "./ArticleListContainer.scss";
import { Dispatch } from "redux";
import {
  IArticleItemResponse,
  IArticleListRequest,
  ICategoryType,
} from "../../sagas/articleList/Interface";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { requestArticleList } from "../../actions/ArticleListActions";
import { connect } from "react-redux";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { IScreenName } from "../../navigations/NavigationTypes";
import VMArticleListItem from "../../components/VMArticleListItem";

interface IArticleListContainer extends NativeStackHeaderProps {
  articles: Array<IArticleItemResponse>;
  requestArticleList: (payload: IArticleListRequest) => void;
}

const ArticleListContainer = (props: IArticleListContainer) => {
  const ARTICLE_ITEM_HEIGHT = 150;
  const { navigation, articles, requestArticleList } = props;
  const handleArticleClick = (article: IArticleItemResponse) => {
    // navigation.navigate(IScreenName.ArticleDetail);
  };

  useEffect(() => {
    requestArticleList({
      page: 0,
      pageSize: 20,
      category: ICategoryType.BUSINESS,
      country: "us",
    });
  }, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IArticleItemResponse>) => {
    return (
      <VMArticleListItem
        itemData={item}
        didSelectArticle={handleArticleClick}
      />
    );
  }, []);

  const keyExtractor = useCallback((item: IArticleItemResponse) => {
    return item.url;
  }, [])

  const getItemLayout = useCallback((_, index) => ({
    length: ARTICLE_ITEM_HEIGHT,
    offset: ARTICLE_ITEM_HEIGHT * index,
    index,
  }), []);

  return (
    <View style={styles.container}>
      {articles ? (
        <FlatList
          data={articles.filter((article) => article.urlToImage)}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          windowSize={3}
          getItemLayout={getItemLayout}
        />
      ) : (
        <Text>{`Loading Content....`}</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state: IAppRootState) => {
  return {
    articles: state.articleListState.articles,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestArticleList: (payload: IArticleListRequest) =>
      dispatch(requestArticleList(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer);
