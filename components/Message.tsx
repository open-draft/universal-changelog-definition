import styled from 'styled-components'

const getBorderColor = ({ type }) => {
  switch (type) {
    case 'error':
      return '#CF9795'

    case 'warning':
      return '#E9D77C'

    default:
      return '#93C7D5'
  }
}

const getBackgroundColor = ({ type }) => {
  switch (type) {
    case 'error':
      return '#F0C9C7'

    case 'warning':
      return '#FCEEC1'

    default:
      return '#D2EAF9'
  }
}

const getColor = ({ type }) => {
  switch (type) {
    case 'error':
      return '#a14645'

    case 'warning':
      return '#866a2d'

    default:
      return '#337499'
  }
}

export const Message = styled.div`
  margin: 2rem 0;
  padding: 1rem 1.25rem;

  background-color: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};
  border-radius: 4px;
  color: ${getColor};
`
