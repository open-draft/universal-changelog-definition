import React from 'react'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { GitHubCorner } from '../components/GitHubCorner'
import { Code } from '../components/Code'
import '../assets/github-corner.css'
import '../assets/styles.css'

const components = {
  code: ({ className, children }) => {
    return (
      <Code
        code={children.trim()}
        language={className && className.replace('language-', '')}
      />
    )
  }
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={components}>
      <GitHubCorner url="https://github.com/open-draft/universal-changelog-definition" />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default App
