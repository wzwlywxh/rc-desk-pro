import React from 'react'
import { Dropdown, Menu } from "antd"

const MessageMenu = (props) => {
  const {list, keyString, labelString}  = props
  const nemuItems = list.map(li => (
    <Menu.Item key={li[keyString]} style={{maxWidth: 400}}>
      {li[labelString]}
    </Menu.Item>
  ))
  return (
    <Menu>
      {nemuItems}
    </Menu>
  )
}

export default ({list, keyString, labelString, IconComponent}) => {
  return (
      <Dropdown overlay={<MessageMenu list={list} keyString={keyString} labelString={labelString}/>}>
        <a target="_blank" rel="noopener noreferrer">
          <IconComponent style={{fontSize: 24}} />
        </a>
      </Dropdown>
  )
}
