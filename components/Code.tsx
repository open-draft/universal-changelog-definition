import React from "react";
import Highlight, { defaultProps, Language, PrismTheme } from "prism-react-renderer";
import DefaulTheme from 'prism-react-renderer/themes/palenight'

interface CodeProps {
  code: string
  language?: Language
  theme?: PrismTheme
}

export const Code: React.FC<CodeProps> = ({ code, language, theme }) => {
  return (
    <Highlight {...defaultProps} code={code.trim()} language={language} theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
    </Highlight>
  )
}

Code.defaultProps = {
  theme: DefaulTheme,
  language: 'javascript'
}