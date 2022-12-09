import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app'
import 'styles/tailwind.css'
import { ConfigProvider } from 'antd'
import { ANTD_THEME } from 'styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={ANTD_THEME}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
