import axios from 'axios'
const ax = axios.create({
  // baseURL: 'eunomia-server',
  timeout: 1000,
});
// 获取有权限的路由表
export const RouteGet = () => ax.get('public/json/routes.json')

// 获取系统配置
export const ConfigGet = () => ax.get(`public/json/config.json`)

// 获取当前的未读消息
export const NoticeGet = () => ax.get('public/json/noti.json')

// 获取菜单表
export const MenuGet = () => ax.get('public/json/menu.json')
