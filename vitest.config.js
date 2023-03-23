import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['packages/**/*.test.js'], //匹配所有符合的文件
    globals: true, //全局API，需要在tsconfig.ts生明类型支持
  },
})
