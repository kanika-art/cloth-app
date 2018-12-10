import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, List, WhiteSpace } from 'antd-mobile';
import './index.css';

const Item = List.Item;
const Brief = Item.Brief;

export default class UserInfo extends React.PureComponent {
  render() {
    return (
      <div className="user-info">
        <NavBar
          icon={<Link to="/"><Icon color="#ffffff" type="left" /></Link>}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >个人信息</NavBar>
        <List className="my-list">
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            大菠萝 <Brief>会员名</Brief>
          </Item>
          <WhiteSpace />
          <Item arrow="horizontal" onClick={() => {}}>
            我的收货地址
          </Item>
          <WhiteSpace />
          <Item arrow="horizontal" onClick={() => {}}>
            修改手机号码
          </Item>
          <Item arrow="horizontal" onClick={() => {}}>
            设置登录密码
          </Item>
          <Item arrow="horizontal" onClick={() => {}}>
            注销账户
          </Item>
        </List>
      </div>
    )
  }
}
