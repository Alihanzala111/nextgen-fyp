const { getDefaultConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig();

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    // Add any custom resolver config here if needed
  },
};
