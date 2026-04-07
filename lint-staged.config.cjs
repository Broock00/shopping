const path = require("path");

/** @type {import('lint-staged').Configuration} */
module.exports = {
  "shopping/**/*.{js,jsx,ts,tsx}": (filenames) => {
    if (!filenames.length) return [];
    // Absolute paths: shell cwd stays repo root (Windows cmd + lint-staged), but ESLint resolves config from file paths.
    const args = filenames
      .map((f) => path.resolve(process.cwd(), f))
      .map((f) => JSON.stringify(f))
      .join(" ");
    return `npm --prefix shopping exec -- eslint --max-warnings 0 --fix ${args}`;
  },
};
