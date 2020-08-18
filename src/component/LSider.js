import React from 'react'
import { Menu } from 'antd';
import { Link, useHistory } from "react-router-dom";

const { SubMenu } = Menu

export default ({ menuSiders, activeMenuRoot }) => {
  const history = useHistory()
  const menuItems = (menu) => (
      menu.nodes && menu.nodes.map(({text, menuId}) => (
          <Menu.Item key={menuId}>
            <Link to={`${activeMenuRoot}${menuId}`}>
              {text}
            </Link>
          </Menu.Item>
      ))
  )

  const menuSider = menuSiders.map(menu => {
    if (menu.nodes && menu.nodes.length) {
      return (
          <SubMenu key={menu.menuId} title={menu.text}>
            {menuItems(menu)}
          </SubMenu>
      )
    }
    else {
      return (
          <Menu.Item key={menu.menuId}>
            <Link to={`${activeMenuRoot}${menu.menuId}`}>
              {menu.text}
            </Link>
          </Menu.Item>
      )
    }
  })

  const handleSelect = ({item, key, keyPath, selectedKeys, domEvent }) => {
    const path = `${activeMenuRoot}${key}`
    history.replace(path)
  }

  return (
      <Menu
          onSelect={handleSelect}
          mode="inline">
        {menuSider}
      </Menu>
  )
}
