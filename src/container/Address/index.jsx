import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, List, Tag } from 'antd-mobile';
import './index.css';

const Item = List.Item;
const Brief = Item.Brief;

export default class Address extends React.PureComponent {
  render() {
    return (
      <div className="adress-list">
        <NavBar
          icon={<Link to="/"><Icon color="#ffffff" type="left" /></Link>}
          rightContent={[
            '添加新地址'
          ]}
        >我收货地址</NavBar>
        <List className="my-list">
          <Item multipleLine wrap extra="编辑" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            大菠萝<span style={{color: '#949494',marginLeft: '10px', fontSize: '12px'}}>1388888888</span>
            <Brief>
              <Tag style={{ paddingLeft: '4px',paddingRight: '4px', marginRight: '3px' }} selected>默认</Tag>
              <span>我们只想 选择性 的渲染 一个看看 如何使用</span>
            </Brief>
          </Item>
          <Item multipleLine wrap extra="编辑" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            大菠萝<span style={{color: '#949494',marginLeft: '10px', fontSize: '12px'}}>1388888888</span>
            <Brief>
              <span>我们只想 选择性 的渲染 一个看看 如何使用</span>
            </Brief>
          </Item>
        </List>
      </div>
    )
  }
}
