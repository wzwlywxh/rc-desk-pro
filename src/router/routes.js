import { lazy } from 'react'

const Home = lazy(() => import('../page/Home'))
const MenuDeskConfig = lazy(() => import('../page/menu/DeskConfig'))//MenuDeskDef111
const MenuDeskDef111 = lazy(() => import('../page/menu/DeskDef111'))
const MenuManage = lazy(() => import('../page/menu/Manage'))

const UiTable = lazy(() => import('../page/UI/Table'));
const UiTree = lazy(() => import('../page/UI/Tree'))

export default {
  Home, MenuDeskConfig, MenuDeskDef111, MenuManage, UiTable, UiTree
}
