import React from 'react'
import Highlight, {
  defaultProps,
  Language,
  PrismTheme
} from 'prism-react-renderer'
import DefaulTheme from 'prism-react-renderer/themes/palenight'
import styled, { css } from 'styled-components'

interface CodeProps {
  code: string
  language?: Language
  theme?: PrismTheme
  focusedLines?: number[]
}

const Line = styled.div<{ isFocused?: boolean }>`
  padding: 0 2em;

  ${({ isFocused }) =>
    isFocused &&
    css`
      background-color: rgba(255, 255, 255, 0.1);
    `}
`

export const Code: React.FC<CodeProps> = ({
  code,
  language,
  theme,
  focusedLines
}) => {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line
              {...getLineProps({ line, key: i })}
              isFocused={focusedLines && focusedLines.includes(i)}
            >
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </Line>
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
