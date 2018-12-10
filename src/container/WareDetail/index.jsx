import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, Flex, WingBlank } from 'antd-mobile';
import Swiper from '../../component/Swiper';
import './index.css';

export default class WareDetail extends React.PureComponent {
	render() {
		return (
			<div>
				<NavBar
          icon={<Link to="/"><Icon color="#ffffff" type="left" /></Link>}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >商品详情</NavBar>
        <Swiper />
        <div className="ware-intro">
        	<WingBlank size="small">
	        	<p>棉麻布布料枕头套布艺绿色植物印花加厚款</p>
	        	<p>绿色助我也印花加厚款</p>
	        	<div className="price-section">
	        		<Flex justify="center">
								<Flex.Item>
									<p>一米起批</p>
									<span>¥30</span>
								</Flex.Item>
								<Flex.Item>
									<p>一米起批</p>
									<span>¥30</span>
								</Flex.Item>
								<Flex.Item>
									<p>一米起批</p>
									<span>¥30</span>
								</Flex.Item>
							</Flex>
						</div>
					</WingBlank>
				</div>
        <div className="ware-checked-info">
					<WingBlank size="small">
						<Flex justify="between">
	        		<Flex.Item>
								<p className="one-section">已选<strong>黑色，一个</strong></p>
							</Flex.Item>
							<Flex.Item style={{ textAlign: 'right' }}>
								<Icon type="right" />
							</Flex.Item>
						</Flex>
					</WingBlank>
				</div>
				<div className="ware-agent-info">
					<WingBlank size="small">
						<p className="one-section">供货状态<strong>现货供应</strong></p>
						<p className="one-section">发货地点<strong>广州</strong></p>
					</WingBlank>
				</div>
				<div className="ware-detail-info">
					<WingBlank size="small">
						<h4>商品参数</h4>
						<p className="one-section">编号<strong>12345667890</strong></p>
						<p className="one-section">成分<strong>亚麻100%</strong></p>
						<p className="one-section">克重<strong>156.00</strong></p>
						<p className="one-section">门幅<strong>亚麻100%</strong></p>
						<p className="one-section">颜色<strong>红，黄，绿，蓝</strong></p>
						<p className="one-section">产品用途<strong>服装</strong></p>
						<p className="one-section">加工工艺<strong>染色</strong></p>
					</WingBlank>
				</div>
			</div>
		)
	}
}
