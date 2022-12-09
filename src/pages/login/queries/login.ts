import { User } from 'types/user'
import { apiClient } from 'utils/client'

export async function login({ email, password }: { email: string; password: string }) {
  const { data } = await apiClient.post<{ jwt: string; user: User }>('/auth/local', {
    identifier: email,
    password,
  })
  return data
}
