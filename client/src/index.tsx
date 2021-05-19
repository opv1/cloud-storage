import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { store } from 'store/index'
import { GlobalStyles, theme } from 'styles/globalStyles'
import App from 'App'
import reportWebVitals from 'reportWebVitals'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
