import constate from 'constate'
import { fetchLoggedInUser } from 'queries/user'
import { useQuery } from 'react-query'

export function useAuth() {
  const { isLoading, data } = useQuery(['logged-in'], fetchLoggedInUser, {
    retry: false,
  })

  return {
    authVerificationInProgress: isLoading,
    user: data,
  }
}

export const [AuthProvider, useAuthContext] = constate(useAuth)
