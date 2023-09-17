module.exports = {
  types: [
    { name: "feat \t✨ New feature", value: ":sparkles: feat" },
    { name: "fix \t🐛 Bug fix", value: ":bug: fix" },
    {
      name: "test \t✅ Add, update, or pass tests",
      value: ":white_check_mark: test",
    },
    { name: "refactor \t♻️ Refactor code", value: ":recycle: refactor" },
    {
      name: "wrench \t🔧 Add or update configuration",
      value: ":wrench: config",
    },
    {
      name: "style \t💄 Add or update the UI and style files",
      value: ":lipstick: style",
    },
    { name: "docs \t📝 Change Documentation", value: ":memo: docs" },
    { name: "perf \t⚡ Improves performance", value: ":zap: perf" },
    {
      name: "security \t🔒 Fix or prevent security issue",
      value: ":lock: security",
    },
    { name: "upgrade \t⬆ Upgrade dependency", value: ":arrow_up: upgrade" },
    { name: "plus \t➕ New dependency", value: ":heavy_plus_sign: plus" },
    { name: "minus \t➖ Remove dependency", value: ":heavy-minus-sign: minus" },
  ],
  skipQuestions: ["body", "footer"],
  scopes: ["api", "ui"],
  allowCustomScopes: true,
  subjectLimit: 100,
};
