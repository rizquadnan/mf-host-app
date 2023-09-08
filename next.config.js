const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

// on dev can set to localhost
// on deployment make sure to set the remotes deployment urls
const REMOTE_ONE_URL =
  process.env.REMOTE_ONE_URL || "http://localhost:3001";
const REMOTE_TWO_URL = process.env.REMOTE_TWO_URL || "http://localhost:3002";

const remotes = () => {
  return {
    "remote-one": `${REMOTE_ONE_URL}/_next/static/chunks/remoteEntry.js`,
    "remote-two": `${REMOTE_TWO_URL}/_next/static/chunks/remoteEntry.js`,
  };
};

const generateRemotesForWebpack = () => {
  // add prefix remoteKey@ to all url values
  return Object.entries(remotes()).reduce((acc, cur) => {
    const [remoteKey, remoteUrl] = cur;
    return {
      ...acc,
      [remoteKey]: `${remoteKey}@${remoteUrl}`
    }
  }, {})
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    remotes: remotes(),
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: generateRemotesForWebpack(),
        filename: "static/chunks/remoteEntry.js",
      })
    );

    return config;
  },
};

module.exports = nextConfig;
