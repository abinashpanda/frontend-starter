import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { AxiosError } from 'axios'
import { useAuthContext } from 'hooks/use-auth'
import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Navigate, useSearchParams } from 'react-router-dom'
import { login } from './queries/login'

export default function Login() {
  const queryClient = useQueryClient()
  const { mutate: loginMutation, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      message.success('Sucessfully logged in')
      // save the token in localstorage for further usage
      window.localStorage.setItem(import.meta.env.VITE_BEARER_TOKEN_KEY, data.jwt)
      // update the user in the queryClient, so that you would automatically get user from useAuthContext
      queryClient.setQueryData(['logged-in'], data.user)
    },
    onError: (error: AxiosError<{ error: { message: string } }>) => {
      message.error(error.response?.data?.error?.message ?? 'Something went wrong. Please try again')
    },
  })

  const handleSubmit = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      loginMutation({ email, password })
    },
    [loginMutation],
  )

  const { user } = useAuthContext()
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') ?? '/'
  if (user) {
    return <Navigate to={{ pathname: redirectTo }} replace />
  }

  return (
    <div className="grid h-screen grid-cols-2 gap-4">
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-4 text-2xl font-medium">Login</div>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="abc@xyz.com" prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Button className="w-full" type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
              Login
            </Button>
          </Form>
        </div>
      </div>
      <div className="bg-gradient-to-br from-red-200 via-red-300 to-yellow-200" />
    </div>
  )
}
