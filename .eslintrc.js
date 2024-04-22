module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      extends: ['plugin:testing-library/react'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-native/no-inline-styles': 0,
  },
};
