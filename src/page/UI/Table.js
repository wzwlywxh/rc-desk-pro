import React, {useState} from "react"
import {Button} from 'antd'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>{count}</div>
      <div>
        <Button onClick={() => setCount(count+1)}>设置</Button>
      </div>
    </div>
  )
}
