module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'always'],
    'type-empty': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'Feat::',
        'Update::',
        'Fix::',
        '!BREAKING CHANGE::',
        '!HOTFIX::',
        'Docs::',
        'Style::',
        'Refactor::',
        'Test::',
        'Rename::',
        'Chore::',
        'Comment::',
        'Remove::',
      ],
    ],
  },
};
