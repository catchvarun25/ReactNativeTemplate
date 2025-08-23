import { IArticleItemResponse } from "../sagas/articleList/Interface";

export type RootStackParamList = {
  Login: undefined;
  ArticlesList: undefined;
  ArticleDetails: { selectedArticle: IArticleItemResponse };
  Profile: undefined;
};

export enum IScreenName {
  Login = "Login",
  ArticlesList = "ArticlesList",
  ArticleDetails = "ArticleDetails",
  Profile = "Profile",
}
