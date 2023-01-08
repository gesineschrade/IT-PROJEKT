/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

function showInfo() {
  document.getElementById('info').innerHTML = 'Learn more about Sex by playing a game.';
}


