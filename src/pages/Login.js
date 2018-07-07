import React,{ Component } from 'react'
import HeaderLogin from '../Mylogin/HeaderLogin'
import LoginBtn from '../Mylogin/LoginBtn.js'
import './Login.css'
class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			isShowEditor:false,
			textcontent:'购物车',
			chooseStyle:true,
			
		}

	}
	render() {
		return (
				<div className="Login">	
					<HeaderLogin isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
					<div className="logincontent">
						<input placeholder="请输入手机号"/>
						<br/>	
						<input placeholder="请输入登录密码"/>
						<p>必要不会以任何理由要求您汇款，谨防诈骗。</p>
						<LoginBtn chooseStyle={this.state.chooseStyle} btncontent="登录"/>
						<LoginBtn chooseStyle={!this.state.chooseStyle} btncontent="验证码登录"/>
						<p><a>还没帐号？快速注册</a><a>忘记密码!</a></p>
					</div>	
				</div>
			)
	}
}
export default Login