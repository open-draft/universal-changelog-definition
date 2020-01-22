const withMDX = require('@next/mdx')({})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  }
})
