import React from 'react';
import { List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { postUserAccount } from '../../action/user';

export default class Register extends React.PureComponent {
	handleChange = (key, value) => {
		console.log(key, value);
		this.setState({ [key]: value })
  }
  register = () => {
    const { user, pwd } = this.state;
    postUserAccount({
      phoneNumber: user,
      password: pwd,
    });
  }
  render() {
		console.log(this.state);
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>用户注册</h4>
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
					<Button onClick={this.register} type='primary'>注册</Button>
				</WingBlank>
      </div>
    )
  }
}
