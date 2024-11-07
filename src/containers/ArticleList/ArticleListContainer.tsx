import React from "react";
import { IAppRootState } from "../../reducers";
import { Dispatch } from "redux";
import { IArticleListRequest } from "../../sagas/articleList/Interface";
import { requestArticleList } from "../../actions/ArticleListActions";
import { View, Text } from "react-native";
import { connect } from "react-redux";

interface IArticleListContainer {}

const ArticleListContainer = (props: IArticleListContainer) => {
  return (
    <View>
      <Text>{`Welcome to Article List View`}</Text>
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
