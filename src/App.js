import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { HashRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import LHeader from './component/LHeader'
import LSider from './component/LSider'
import HeaderMenu from "./component/HeaderMenu"
import AsyncRouter from './router'
import { MenuGet } from "./service";

const { Header, Sider, Content } = Layout

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      menuRoot: [],
      activeMenuRoot: null,
      menuSiders: [],
      defaultSelectedKeys: []
    }
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
  }

  componentDidMount() {
    MenuGet().then(({data}) => {
      data = [{
        "menuId": "homePage",
        "text": "首页",
        'nodes': []
      }].concat(data)
      this.setState({
        menus: data
      })
    })
  }

  handleMenuSelect({ key }) {
    const { menus } = this.state
    let menuSiders = []
    menus.forEach(({menuId, nodes}) => {
      if (key === menuId) menuSiders = nodes
    })
    this.setState({menuSiders, activeMenuRoot: key})
  }

  render() {
    const { menus, menuSiders, activeMenuRoot } = this.state

    const sider = menuSiders.length ? (
      <Sider>
        <LSider menuSiders={menuSiders} activeMenuRoot={activeMenuRoot}/>
      </Sider>
    ) : null

    return (
      <Router>
        <Layout>
          <Header>
            <LHeader/>
            <HeaderMenu menus={menus} onSelectChange={this.handleMenuSelect}/>
          </Header>
          <Layout>
            {sider}
            <Content>
              <AsyncRouter/>
            </Content>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default hot(module)(App)
