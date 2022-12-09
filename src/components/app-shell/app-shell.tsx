import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'
import clsx from 'clsx'
import { useAuthContext } from 'hooks/use-auth'
import { useCallback } from 'react'
import { useQueryClient } from 'react-query'

type AppShellProps = {
  children: React.ReactElement
  className?: string
  style?: React.CSSProperties
}

export default function AppShell({ children, className, style }: AppShellProps) {
  const { user } = useAuthContext()

  const queryClient = useQueryClient()
  const handleLogout = useCallback(() => {
    window.localStorage.removeItem(import.meta.env.VITE_BEARER_TOKEN_KEY)
    queryClient.setQueryData(['logged-in'], undefined)
  }, [queryClient])

  return (
    <div className={clsx('flex h-screen flex-col overflow-hidden', className)} style={style}>
      <div className="h-16 border-b">
        <div className="mx-auto flex h-full max-w-screen-xl items-center">
          <div className="text-xl font-semibold tracking-tighter">Frontend Starter</div>
          <div className="flex-1" />
          <Dropdown
            trigger={['click']}
            menu={{
              items: [
                {
                  key: 'name',
                  disabled: true,
                  label: (
                    <div>
                      <div>{user!.username.toUpperCase()}</div>
                      <div className="text-sm">{user!.email}</div>
                    </div>
                  ),
                },
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: 'Logout',
                  onClick: handleLogout,
                },
              ],
            }}
          >
            <button className="rounded-full">
              <Avatar>{user!.username[0].toUpperCase()}</Avatar>
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">{children}</div>
    </div>
  )
}
