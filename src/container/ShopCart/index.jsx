import React from 'react';
import { List, Checkbox, Icon, Stepper } from 'antd-mobile';
import './index.css';

const CheckboxItem = Checkbox.CheckboxItem;

export default class ShopCart extends React.PureComponent {
	state = {
		val: 0
	}
	onChange = () => {

	}

	renderHeader = () => {
		return (
			<h4 className="cart-title">
				<CheckboxItem onChange={() => this.onChange()}>
					<div>
						<img alt="test" src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png"/>
						<span>布商城旗舰店</span>
					</div>
					<Icon type="right" />
				</CheckboxItem>
			</h4>
		)
	}

  render() {
     const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];
    return (
	    <div>
	      <List className="cart-list" renderHeader={this.renderHeader()}>
	        {data.map(i => (
	          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
	            <div className="cart-item-container">
	            	<img alt="test" src="https://cbu01.alicdn.com/img/ibank/2018/987/616/8977616789_728144911.310x310.jpg" />
	            	<div className="cart-detail-info">
	            		<h4>
	            			<strong>棉麻布料粗麻布整套布布艺</strong>
	            			<span>¥146.00</span>
	            		</h4>
	            		<p>黑色</p>
	            		<div>
	            			<Stepper
				              style={{ width: '50px', minWidth: '100px', height: '25px', lineHeight: '25px' }}
				              showNumber
				              max={10}
				              min={1}
				              value={this.state.val}
				              onChange={this.onChange}
				            />
	            		</div>
	            	</div>
	            </div>
	          </CheckboxItem>
	        ))}
	      </List>
	    </div>
	  )
  }
}
