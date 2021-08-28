/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["/styles/globals.scss"],
    prependData: `@import "/styles/mixins.scss";`,
  },
};
