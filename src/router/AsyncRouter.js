import React, {useEffect, useState, Suspense} from "react";
import {RouteGet} from "../service";
import allRoutes from "./routes";
import {Route, Switch} from "react-router-dom";

export default () => {
  // 动态路由表
  const [activeRoutes, setActiveRoutes] = useState([])
  useEffect(() => {
    RouteGet().then(({data}) => {
      const route = data.map(({path, name}) => {
        const C = allRoutes[name]
        return <Route key={name} path={path}><C/></Route>
      })
      setActiveRoutes(route)
    }, [])
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{activeRoutes}</Switch>
    </Suspense>
  )
}

// export default AsyncRouter(allRoutes)
/*export default class AsyncRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Routes: () => null
    }
  }

  componentDidMount() {
    RouteGet().then(({data}) => {
      const route = data.map(({path, name}) => {
        const C = allRoutes[name]
        return <Route key={name} path={path}><C/></Route>
      })

      this.setState({
        Routes: () => (
          <Switch>{route}</Switch>
        )
      })
    })
  }

  render() {
    const {Routes} = this.state
    return <Routes/>
  }
}*/
