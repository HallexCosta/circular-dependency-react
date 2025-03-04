const getWebpackWatchOptions = (ignored = []) => ({
  aggregateTimeout: 5, // 5ms nextjs
  ignored: [
    '**/node_modules',
    '**/build',
    '**/.jest-cache',
    '**/dist',
    '**/.webpack',
    '**/.cache',
    '**/cache',
    '**/public',
    '**/docs-build',
    '**/.idea',
    '**/prettier',
    '**/dist-storybook',
    '**/.docusuarus',
    '**/.next',
    '**/coverage',
    '**/.eslintcache',
    '**/build-server',
    '**/.docusuarus',
    '**/yarn-error.log',
    '**/.docusuarus',
    '**/turbo-build.log',
    '**/.turbo',
    '**/__tests__',
    'CHANGELOG.md',
    '*.log',
    '*.swp',
    '*.tmp',
    ...ignored
  ]
})

module.exports.getWebpackWatchOptions = getWebpackWatchOptions
