import { CheckCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function App() {
  return (
    <div className="p-4">
      <Button type="primary" icon={<CheckCircleOutlined />}>
        Click Here
      </Button>
    </div>
  )
}
