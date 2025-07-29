import React, { useEffect, useCallback, useRef } from "react";
import { IAppRootState } from "../../reducers";
import styles from "./ArticleListContainer.scss";
import { Dispatch } from "redux";
import {
  IArticleItemResponse,
  IArticleListRequest,
  ICategoryType,
} from "../../sagas/articleList/Interface";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { requestArticleList } from "../../reducers/ArticleListReducers";
import { connect } from "react-redux";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { IScreenName } from "../../navigations/NavigationTypes";
import VMArticleListItem from "../../components/VMArticleListItem";
import withLoader from "../../hocs/WithLoader";
import { ERequestStatus } from "../../utility/CommonInterface";
import { API_PAGES_SIZE } from "../../sagas/articleList/Interface";

interface IArticleListContainer extends NativeStackHeaderProps {
  articles: Array<IArticleItemResponse>;
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>


const ArticleListContainer = (props: IArticleListContainer & StateProps & DispatchProps) => {
  const ARTICLE_ITEM_HEIGHT = 150;
  const { articles, requestArticleList, status, shouldLoadMore } = props;
  const pageNumber = useRef(0);
  const handleArticleClick = (article: IArticleItemResponse) => {
    // navigation.navigate(IScreenName.ArticleDetail);
  };

    //TODO: Add Profile page to update the current location. Which is auto adjusted to usesr current location
  const requestMoreArticles = () => {

    requestArticleList({
      page: pageNumber.current,
      category: ICategoryType.BUSINESS,
      country: "us",
    });
  }

  useEffect(() => {
    requestMoreArticles();
  }, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IArticleItemResponse>) => {
    return (
      <VMArticleListItem
        itemData={item}
        didSelectArticle={handleArticleClick}
      />
    );
  }, []);

  const keyExtractor = useCallback((item: IArticleItemResponse, index: number) => {
    return `fallback-${index}`;
  }, [])

  const getItemLayout = useCallback((_, index: number) => ({
    length: ARTICLE_ITEM_HEIGHT,
    offset: ARTICLE_ITEM_HEIGHT * index,
    index,
  }), []);

  const loadeMoreData = () => {
    if (status !== ERequestStatus.INPROGRESS && shouldLoadMore) {
      pageNumber.current = pageNumber.current + 1;
      requestMoreArticles();
    }
  }

  return (
    <View style={styles.container}>
        <FlatList
          data={articles.filter((article) => article.urlToImage)}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          initialNumToRender={API_PAGES_SIZE}
          windowSize={11}
          getItemLayout={getItemLayout}
          onEndReached={loadeMoreData}
          onEndReachedThreshold={0.5}
        />
    </View>
  );
};

const mapStateToProps = (state: IAppRootState) => {
  return {
    articles: state.articleListState.articles,
    status: state.articleListState.status,
    shouldLoadMore: state.articleListState.shouldLoadMore,
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
