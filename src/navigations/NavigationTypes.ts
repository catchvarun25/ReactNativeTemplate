export type RootStackParamList = {
  Login: undefined;
  ArticlesList: undefined;
  ArticleDetail: { articleId: number };
};

export enum IScreenName {
  Login = "Login",
  ArticlesList = "ArticlesList",
  ArticleDetail = "ArticleDetail",
}
