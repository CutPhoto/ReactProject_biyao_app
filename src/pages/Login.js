import React,{ Component } from 'react'
import HeaderLogin from '../Mylogin/HeaderLogin'
import LoginBtn from '../Mylogin/LoginBtn.js'
import './Login.css'
class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			isShowEditor:false,
			textcontent:'登录',
			chooseStyle:true,
			isPassword:true,
			
		}
		this.eyeclick = this.eyeclick.bind(this)
		this.clearvalue = this.clearvalue.bind(this)
		this.showvaule=this.showvaule.bind(this)
	}
	eyeclick(){

		this.setState({
			isPassword:!this.state.isPassword
		})

	}
	clearvalue(e){
		e.target.style.display="none";
		e.target.parentNode.children[0].value="";
	}
	showvaule(e){
		e.target.parentNode.children[1].style.display="block";
	}
	render() {
		return (
				<div className="Login">	
					<HeaderLogin isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
					<div className="logincontent" style={{marginTop:'60px'}}>
						<div style={{position:'relative'}}>
							<input placeholder="请输入手机号" type="text" onInput={this.showvaule}/>
							<span className="clearvalue0 clearvalue" onClick={this.clearvalue} >x</span>
						</div>
						<div style={{position:'relative'}}>		
							<input placeholder="请输入登录密码" type = {this.state.isPassword? 'password':'text'} onInput={this.showvaule}/>
							<span className="clearvalue1 clearvalue"  onClick={this.clearvalue}>x</span>
							<i className="eye" onClick={this.eyeclick}></i>
						</div>
						<p>必要不会以任何理由要求您汇款，谨防诈骗。</p>
						<LoginBtn chooseStyle={this.state.chooseStyle} btncontent="登录"/>
						<LoginBtn chooseStyle={!this.state.chooseStyle} btncontent="验证码登录"/>
						<p style={{marginTop:'40px',fontSize:'16px',height:'40px'}}><a>还没帐号？快速注册</a><a>忘记密码!</a></p>
					</div>
					<div className="partnerLogins">
						<div className="line">
							<span>合作帐号登录</span>
						</div>
						<div style={{textAlign:'center'}}>
							<i className="qqlogin"></i>
						</div>
					</div>		
				</div>
			)
	}
}
export default Login