import React, { useEffect } from "react";
import { IAppRootState } from "../../reducers";
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
  const { navigation, articles, requestArticleList } = props;

  const handleArticleClick = (articleUrl: string) => {
    console.log(`ArticleUrl: ${articleUrl}`);
    // navigation.navigate(IScreenName.ArticleDetail);
  };

  useEffect(() => {
    requestArticleList({
      page: 0,
      pageSize: 20,
      category: ICategoryType.GENERAL,
      country: "us",
    });
  }, []);

  const renderItem = ({ item }: ListRenderItemInfo<IArticleItemResponse>) => {
    return (
      <VMArticleListItem
        itemData={item}
        didSelectArticle={handleArticleClick}
      />
    );
  };

  return (
    <View>
      {articles ? (
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.url ?? ""}
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
