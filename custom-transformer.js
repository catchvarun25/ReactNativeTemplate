const svgTransformer = require("react-native-svg-transformer");
const metroBabelTransformer = require("metro-react-native-babel-transformer");

module.exports.transform = function ({ src, filename, options }) {
  if (filename.endsWith(".svg")) {
    return svgTransformer.transform({ src, filename, options });
  }
  return metroBabelTransformer.transform({ src, filename, options });
};
