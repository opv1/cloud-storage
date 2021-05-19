import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

type ThemeType = {
  [key: string]: {
    [key: string]: string
  }
}

interface GlobalStylesProps {
  theme: ThemeType
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Arial', 'Helvetica', sans-serif;
    background-color: #dddfe6;
  }

  html {
    @media ${({ theme }) => theme.media.tablet} {
      font-size: 15px;
    }
  }
`

export const theme = {
  colors: {
    primary: '#f1404b',
    secondary: '#252c41',
  },
  media: {
    mobile: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
  },
}
