import { Spin } from 'antd'
import AuthProtection from 'components/auth-protection'
import { useAuthContext } from 'hooks/use-auth'
import Dashboard from 'pages/dashboard'
import Login from 'pages/login'
import { Route, Routes } from 'react-router-dom'

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
      {/* TODO: Implement lazy loading */}
      <Route
        path=""
        element={
          <AuthProtection>
            <Dashboard />
          </AuthProtection>
        }
      />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}
