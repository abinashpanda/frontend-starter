import axios from 'axios'
import { QueryClient } from 'react-query'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})
apiClient.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {}
  }

  const accessToken = localStorage.getItem(import.meta.env.VITE_BEARER_TOKEN_KEY)
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
