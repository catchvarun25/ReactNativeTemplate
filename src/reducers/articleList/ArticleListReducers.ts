import { IArticleListResponse } from "../../sagas/articleList/Interface";
import { Reducer } from "redux";
import { ArticleListActionTypes } from "../../actions/ArticleListActions";
import { IRequestStatus } from "../../sagas/common/Interface";
import { IArticleListState } from "../../sagas/articleList/Interface";

const initialState: IArticleListState = {
  articles: [],
  status: IRequestStatus.NONE,
};

export const articleListReducer: Reducer<IArticleListState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ArticleListActionTypes.REQUEST_GET_ARTICLE_LIST:
      return { ...state, status: IRequestStatus.LOADING };
    case ArticleListActionTypes.SUCCESS_GET_ARTICLE_LIST:
      return {
        ...state,
        articles: action.payload.articles,
        status: IRequestStatus.SUCCESS,
      };
    case ArticleListActionTypes.ERROR_GET_ARTICLE_LIST:
      return { ...state, status: IRequestStatus.FAILED };
    default:
      return { ...state };
  }
};
