declare module "react-native-config" {
  export interface NativeConfig {
    NEWS_API_HOST_URL?: string;
    NEWS_API_ACCESS_TOKEN?: string;
    JINA_API_HOST_URL?: string;
    JINA_API_ACCESS_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
