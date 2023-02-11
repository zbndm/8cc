import { defineConfig } from '8cc'

export default defineConfig({
  exclude: [
    'lodash',
  ],
  packageMode: {
    'typescript': 'major',
    'unocss': 'ignore',
    '/vue/': 'latest',
  },
})
