import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store/index'
import App from 'App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
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
`

const theme = {
  colors: {
    primary: 'green',
    secondary: 'red',
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
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
