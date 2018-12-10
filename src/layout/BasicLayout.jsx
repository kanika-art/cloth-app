import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { NavBar, Icon, TabBar } from 'antd-mobile';
import Home from '../container/Home';
import Agent from '../container/Agent';
import ShopCart from '../container/ShopCart';
import Mine from '../container/Mine';

const tabBarList = [
  {
    title: '布商城',
    key: '',
    icon: 'home',
    path: '/'
  },
  {
    title: '代理商',
    key: 'agent',
    icon: 'agent',
    path: '/agent'
  },
  {
    title: '购物车',
    key: 'shopCart',
    icon: 'cart',
    path: '/shopCart'
  },
  {
    title: '个人主页',
    key: 'mine',
    icon: 'mine',
    path: '/mine'
  }
]

export default class BasicLayout extends React.PureComponent {
  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        <NavBar
          icon={<Link to="/"><Icon color="#ffffff" type="left" /></Link>}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >{tabBarList.find(item => item.path === pathname).title}</NavBar>
        <div style={{ paddindBottom: 50 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/agent" component={Agent} />
            <Route path="/shopCart" component={ShopCart} />
            <Route path="/mine" component={Mine} />
          </Switch>
        </div>
        <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="red"
            barTintColor="white"
            noRenderContent={true}
          >
          {
            tabBarList.map(item => (
              <TabBar.Item
                title={item.title}
                key={item.key}
                icon={{ uri: require(`../image/${item.icon}.svg`) }}
                selectedIcon={{ uri: require(`../image/${item.icon}-clicked.svg`) }}
                selected={pathname === item.path}
                onPress={() => {
                  this.props.history.push(`/${item.key}`)
                }}
              >
            </TabBar.Item>
            ))
          }
          </TabBar>
        </div>
      </div>
    )
  }
}
