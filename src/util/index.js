import Loadable from "react-loadable";
import React from "react";

const loadingComponent =()=>{
  return (
    <div>loading</div>
  )
}

export const loadable = (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  });
}

// 异步按需加载component
// export function asyncComponent(getComponent) {
//   return class AsyncComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.Component = null;
//       this.state = { Component: AsyncComponent.Component };
//     }
//
//
//     componentDidMount() {
//       if (!this.state.Component) {
//         getComponent().then(({default: Component}) => {
//           AsyncComponent.Component = Component
//           this.setState({ Component })
//         })
//       }
//     }
//     //组件将被卸载
//     componentWillUnmount(){
//       //重写组件的setState方法，直接返回空
//       this.setState = (state,callback)=>{
//         return;
//       };
//     }
//     render() {
//       const { Component } = this.state
//       if (Component) {
//         return <Component {...this.props} />
//       }
//       return null
//     }
//   }
// }
