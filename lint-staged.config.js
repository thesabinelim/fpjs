// @ts-check

/** @type {import("lint-staged").Config} */
module.exports = {
  "*": [
    "pnpm format:single",
    "pnpm lint:single",
    "pnpm run test --bail --findRelatedTests",
  ],
};
