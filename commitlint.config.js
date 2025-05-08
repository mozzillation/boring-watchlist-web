module.exports = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],

  rules: {
    'task-id-required': [2, 'always'],
    'body-match': [
      2,
      'always',
      /(?:close|closes|closed|closing|fix|fixes|fixed|fixing|resolve|resolves|resolved|resolving|complete|completes|completed|completing|ref|references|part of|related to|contributes to|towards)\s+[A-Z]+-\d+/,
    ],
  },
  plugins: [
    'commitlint-plugin-regex-match',
    {
      rules: {
        'task-id-required': ({ raw }) => {
          const pattern = /\bBW-\d+\b/

          return pattern.test(raw)
            ? [true]
            : [false, 'Commit must include a Linear issue ID e.g. BW-123']
        },
      },
    },
  ],
}
