export type User = {
  id: number
  username: string
  email: string
  // TODO: Use enum
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}
