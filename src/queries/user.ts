import { User } from 'types/user'
import { apiClient } from 'utils/client'

export async function fetchLoggedInUser() {
  const { data } = await apiClient.get<User>('/users/me')
  return data
}
