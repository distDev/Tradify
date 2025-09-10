import antfu from '@antfu/eslint-config'
//  @ts-check
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default antfu({
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
  ],
}, {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^@?\\w'], // npm (включая scoped)
        ['^react', '^react-dom', '^next'], // React
        ['^@/'], // алиасы
        ['^\\u0000'], // side-effect импорты
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // относительные
        ['^.+\\.s?css$'], // стили
      ],
    }],
    'simple-import-sort/exports': 'error',
  },
})
