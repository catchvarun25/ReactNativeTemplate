const sassTransformer = require("react-native-sass-transformer");
const svgTransformer = require("react-native-svg-transformer");
const metroBabelTransformer = require("metro-react-native-babel-transformer");

module.exports.transform = function ({ src, filename, options }) {
  if (filename.endsWith(".scss") || filename.endsWith(".sass")) {
    return sassTransformer.transform({ src, filename, options });
  }
  if (filename.endsWith(".svg")) {
    return svgTransformer.transform({ src, filename, options });
  }
  return metroBabelTransformer.transform({ src, filename, options });
};
