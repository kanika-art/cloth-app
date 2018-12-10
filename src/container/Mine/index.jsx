import React from 'react';
import { Icon, List, Grid } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './index.css';

const Item = List.Item;
const data = [
	{
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
		text: '待付款',
		link: '/'
	},
	{
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
		text: '待发货',
		link: '/'
	},
	{
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
		text: '待收货',
		link: '/'
	}
]

export default class Mine extends React.PureComponent {
  render() {
    return (
      <div>
      	<div className="owner-panel">
      		<div className="owner-container">
      			<img alt="人名" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
      			<strong>大菠萝</strong>
      			<Link to="/ownerInfo"><Icon size="lg" type="right" /></Link>
      		</div>
      	</div>
      	<div className="ower-list">
	      	<List className="order-item">
		        <Item arrow="horizontal" onClick={() => { this.prop.history.push('/') }}>我的订单</Item>
		      </List>
		      <Grid data={data} hasLine={false} />
      	</div>
      </div>
    )
  }
}
