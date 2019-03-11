module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  });

  storybookBaseConfig.module.rules.push({
    test: /\.woff$/,
    use: "file-loader?name=[name].[ext]"
  });

  return storybookBaseConfig;
};
