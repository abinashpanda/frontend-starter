import { Spin } from 'antd'
import AppShell from 'components/app-shell'
import AuthProtection from 'components/auth-protection'
import { useAuthContext } from 'hooks/use-auth'
import Dashboard from 'pages/dashboard'
import Login from 'pages/login'
import { Outlet, Route, Routes } from 'react-router-dom'

export default function App() {
  const { authVerificationInProgress } = useAuthContext()

  if (authVerificationInProgress) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Authenticating User" />
      </div>
    )
  }

  return (
    <Routes>
      <Route
        element={
          <AuthProtection>
            <AppShell>
              <Outlet />
            </AppShell>
          </AuthProtection>
        }
      >
        {/* TODO: Implement lazy loading */}
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  )
}
