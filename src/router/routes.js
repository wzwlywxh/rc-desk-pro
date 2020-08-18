import { lazy } from 'react'

const Home = lazy(() => import('../page/Home'))
const MenuDeskDef = lazy(() => import('../page/menu/DeskDef'))//MenuDeskDef111
const MenuDeskDef111 = lazy(() => import('../page/menu/DeskDef111'))
const MenuManage = lazy(() => import('../page/menu/Manage'))

const UiTable = lazy(() => import('../page/UI/Table'));
const UiTree = lazy(() => import('../page/UI/Tree'))


export default {
  Home, MenuDeskDef, MenuDeskDef111, MenuManage, UiTable, UiTree
}
