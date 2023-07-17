module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['Feat::', 'Update::', 'Fix::', '!BREAKING CHANGE::', '!HOTFIX::', 'Docs::', 'Style::', 'Refactor::', 'Test::', 'Rename::', 'Chore::', 'Comment::', 'Remove::'],
    ],
  },
};
