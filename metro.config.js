const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const customConfig = {
    transformer: {
      babelTransformerPath: require.resolve("./custom-transformer"),
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(
        (ext) => ext !== "svg"
      ),
      sourceExts: [...defaultConfig.resolver.sourceExts, "scss", "sass", "svg"],
    },
  };

  return mergeConfig(defaultConfig, customConfig);
})();
