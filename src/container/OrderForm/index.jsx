import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, List, Tag, WhiteSpace, Radio } from 'antd-mobile';
import './index.css';

const Item = List.Item;
const Brief = Item.Brief;
const RadioItem = Radio.RadioItem;

export default class OrderForm extends React.PureComponent {
  state = {
    value: 0
  }
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const data = [
      { value: 0, label: '微信支付' },
      { value: 1, label: '支付宝支付' },
    ];
    return (
      <div className="order-form">
        <NavBar
          icon={<Link to="/"><Icon color="#ffffff" type="left" /></Link>}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >填写订单</NavBar>
        <List className="order-list">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            大菠萝 1388888888 <Tag selected>默认</Tag>
            <Brief>广东省深圳市科技园六道彩虹科技大厦</Brief>
          </Item>
          <WhiteSpace />
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {}}
            extra="2件"
          >
            <img alt="test" src="https://cbu01.alicdn.com/img/ibank/2018/987/616/8977616789_728144911.310x310.jpg" />
            <img alt="test" src="https://cbu01.alicdn.com/img/ibank/2018/987/616/8977616789_728144911.310x310.jpg" />
          </Item>
          <WhiteSpace />
          <Item>
            <p className="split-space"><span>商品金额</span><strong>¥146.00</strong></p>
            <p className="split-space"><span>运费</span><strong>¥0.00</strong></p>
          </Item>
        </List>
        <WhiteSpace />
        <List renderHeader={() => '支付方式'} className="pay-list">
          {data.map(i => (
            <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
      </div>
    )
  }
}
