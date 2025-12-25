import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: true,
    react: true,
    ignores: [
      'dist',
      'storybook-static',
      '.storybook/**',
      'src/stories/**',
      '*.md',
      '*.mdx',
      '*.json',
      'tsconfig*.json',
      'vite.config.ts',
    ],
  },
  {
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type', // все type imports
            ['parent-type', 'sibling-type', 'index-type', 'internal-type'], // type imports по типам
            'builtin', // встроенные модули
            'external', // внешние пакеты
            'internal', // внутренние (алиасы @/)
            ['parent', 'sibling', 'index'], // относительные импорты
            'side-effect', // side-effect импорты
            'object', // object imports
            'unknown', // неизвестные
          ],
          order: 'asc',
          type: 'natural',
          newlinesBetween: 'always', // добавлять пустые строки между группами
        },
      ],
    },
  },
)
