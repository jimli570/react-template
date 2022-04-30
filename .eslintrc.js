module.exports = {
  root: true,
  // Configs to use for linting
  extends: [
    'react-app'
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
