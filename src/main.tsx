import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app'
import 'styles/tailwind.css'
import { ConfigProvider } from 'antd'
import { ANTD_THEME } from 'styles/theme'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'utils/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from 'hooks/use-auth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={ANTD_THEME}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryClientProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
