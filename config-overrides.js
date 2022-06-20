const { alias, configPaths } = require("react-app-rewire-alias");
const { override } = require("customize-cra");
const { pathsToModuleNameMapper } = require("ts-jest");
const paths = require("./tsconfig.paths.json");

module.exports = {
  devServer: (configFunction) => {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      return config;
    };
  },
  webpack: override((config) => {
    return alias(configPaths(paths))(config);
  }),
  jest: override((config) => {
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      ...pathsToModuleNameMapper(paths.compilerOptions.paths),
    };
    return config;
  }),
};
