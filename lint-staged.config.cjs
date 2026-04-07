const path = require("path");

/** @type {import('lint-staged').Configuration} */
module.exports = {
  "shopping/**/*.{js,jsx,ts,tsx}": (filenames) => {
    const shoppingRoot = path.join(process.cwd(), "shopping");
    const rel = filenames.map((f) =>
      path.relative(shoppingRoot, path.resolve(process.cwd(), f)).replace(/\\/g, "/")
    );
    if (!rel.length) return [];
    const args = rel.map((f) => JSON.stringify(f)).join(" ");
    return `cd shopping && npx eslint --max-warnings 0 --fix ${args}`;
  },
};
