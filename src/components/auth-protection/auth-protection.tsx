import { useAuthContext } from 'hooks/use-auth'
import { Navigate, useLocation } from 'react-router-dom'

type AuthProtectionProps = {
  children: React.ReactElement
}

export default function AuthProtection({ children }: AuthProtectionProps) {
  const location = useLocation()

  const { user } = useAuthContext()

  if (user) {
    return children
  }

  return <Navigate to={{ pathname: '/login', search: `redirectTo=${location.pathname}` }} />
}
