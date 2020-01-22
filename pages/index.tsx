import { Badge } from '../components/Badge'
import { Code } from '../components/Code'

import releaseNotesExample from '../assets/RELEASE_NOTES.md'

const Homepage = () => {
  return <div>
    <h1>Universal Changelog Definition <Badge>Draft</Badge></h1>
    <p>Welcome to the RFC for the Universal Changelog Definition.</p>
    
    <h2>Example</h2>
    <Code code={releaseNotesExample} language="markdown" />
  </div>
}

export default Homepage
