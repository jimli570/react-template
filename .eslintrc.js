module.exports = {
  root: true,
  // Configs to use for linting
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb/hooks',
  ],

  rules: {
    // override/add rules settings here, such as:
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 0,
    indent: ['error', 2],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['src/setupTests.ts', '**/*.test.*'] }],
  },

  overrides: [
    {
      files: [
        '**/*.ts?(x)',
      ],
      rules: {
      },
    },
  ],
};
