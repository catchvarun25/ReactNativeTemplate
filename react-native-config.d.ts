declare module "react-native-config" {
  export interface NativeConfig {
    API_HOST_URL?: string;
    ACCESS_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
