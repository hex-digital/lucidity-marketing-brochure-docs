// @ts-check
const { getPrettierConfig } = require('./prettier/helpers');

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...getPrettierConfig(),
  overrides: [
    // whatever you need
  ],
};
