import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { store } from 'store/index'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import 'index.scss'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Arial', 'Helvetica', sans-serif;
    background-color: #dddfe6;
  }

  html {
    @media ${(props) => props.theme.media.tablet} {
      font-size: 14px;
    }
  }
`

const theme = {
  colors: {
    primary: '#f1404b',
    secondary: '#252c41',
  },
  media: {
    mobile: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
  },
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
