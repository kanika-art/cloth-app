import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, List, Picker, InputItem, Radio } from 'antd-mobile';
import district from '../../utils/district';

const RadioItem = Radio.RadioItem;

export default class ModifyAddress extends React.PureComponent {
  state = {
    value: 0
  }
  onChange = (value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="modify-address">
        <NavBar
          icon={<Link to="/"><Icon color="#ffffff" type="left" /></Link>}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >修改收货地址</NavBar>
        <List className="my-list">
          <InputItem placeholder="请输入收货人">
            收货人：
          </InputItem>
          <InputItem placeholder="请输入手机号">
            手机号：
          </InputItem>
          <Picker extra=""
            data={district}
            title="地址"
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">所在地区</List.Item>
          </Picker>
          <InputItem placeholder="请输入详细地址">
            详细地址：
          </InputItem>
          <RadioItem checked={value === 1} onChange={() => this.onChange(1)}>
            设为默认地址
          </RadioItem>
        </List>
      </div>
    )
  }
}
