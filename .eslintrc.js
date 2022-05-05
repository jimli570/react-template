module.exports = {
  root: true,
  // Configs to use for linting
  extends: [
    'react-app',
    "react-app/jest"
  ],

  overrides: [
    {
      files: [
        "**/*.ts?(x)"
      ],
      rules: {
      }
    }
  ]
};
