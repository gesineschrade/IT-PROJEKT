/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

function showInfo() {
  document.getElementById('info').innerHTML = 'Learn more about Sex by playing a game.';
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

const withImages = require('next-images');
module.exports = withImages(); 

