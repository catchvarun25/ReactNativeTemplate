//For SVG files as React Component
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
// For redux-mock-store in test files
declare module "redux-mock-store";
