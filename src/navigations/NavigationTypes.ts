import { IArticleItemResponse } from "../sagas/articleList/Interface";

export type RootStackParamList = {
  Login: undefined;
  ArticleTabs: undefined;
  ArticleDetails: { selectedArticle: IArticleItemResponse };
  Profile: undefined;
};

export enum IScreenName {
  Login = "Login",
  ArticleTabs = "ArticleTabs",
  ArticleDetails = "ArticleDetails",
  Profile = "Profile",
}
