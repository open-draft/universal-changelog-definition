import '../assets/styles.css'
import '../assets/github-corner.css'
import { GitHubCorner } from '../components/GitHubCorner'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GitHubCorner url="https://github.com/open-draft/universal-changelog-definition" />
      <Component {...pageProps} />
    </>
  )
}
