import React from "react"
import {Menu} from "antd"

export default ({menus, onSelectChange}) => {

  const menuItems = menus.map(menu => (
    <Menu.Item key={menu.menuId}>{menu.text}</Menu.Item>
  ))

  const handleMenuSelect = ({ key }) => {
    onSelectChange({key})
  }

  return (
    <div className='ls-header-menu'>
      <Menu span={24} mode="horizontal" onSelect={handleMenuSelect} defaultSelectedKeys={['homePage']}>
        {menuItems}
      </Menu>
    </div>
  )
}
