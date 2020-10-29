import axios from 'axios'
const ax = axios.create({
  baseURL: '',
  timeout: 1000,
});
// 获取有权限的路由表
export const RouteGet = () => ax.get('json/routes.json')

// 获取系统配置
export const ConfigGet = () => ax.get(`json/config.json`)

// 获取当前的未读消息
export const NoticeGet = () => ax.get('json/noti.json')

// 获取菜单表
export const MenuGet = () => ax.get('json/menu.json')


export const DeskTableDataQuery = (data) => ax.get('json/DeskTableData.json', data)
