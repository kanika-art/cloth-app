import React from 'react';
import { List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Login extends React.PureComponent {
	handleChange = (key, value) => {
		console.log(key, value);
		this.setState({ [key]: value })
	}
  render() {
		console.log(this.state);
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>用户登录</h4>
				<WingBlank>
					<List>
						{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
						<InputItem
							onChange={v=>this.handleChange('user',v)}

						>用户</InputItem>
						<WhiteSpace />
						<InputItem
							onChange={v=>this.handleChange('pwd',v)}

						>密码</InputItem>
					</List>
					<WhiteSpace />
					<Button onClick={this.handleLogin} type='primary'>登录</Button>
					<WhiteSpace />
					<Button onClick={this.register} type='primary'>注册</Button>
				</WingBlank>
      </div>
    )
  }
}
