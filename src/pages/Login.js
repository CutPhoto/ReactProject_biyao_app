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
			userPhone:'',
			passWord:''
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
	//双向绑定用户输入的手机号
	inputUserPhone(e){
		this.setState({
			userPhone : e.target.value
		})
		
	}
	//双向绑定用户输入的密码
	inputPassWord(e){
		this.setState({
			passWord : e.target.value
		})
	}
	//登陆事件
	login(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				alert(xhr.responseText);
				if(xhr.responseText=="登录成功！"){
					var now = new Date();
					now.setDate(now.getDate()+7)
					document.cookie =`biyaologin = ${this.state.userPhone}; expires= ${now.toUTCString()}; path= / ;`
					window.location.href="/Myorder";
				}
			}
		}.bind(this)
		xhr.open("post",'http://10.3.134.38:8081/login', true);
		//用post请求必须加上这一句
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		//4.向服务器发送请求
		xhr.send(`userPhone=${this.state.userPhone}&passWord=${this.state.passWord}`);
	}
	componentWillMount() {
		var cookies = document.cookie;
		var arr = cookies.split('; ');
		arr.forEach((item)=>{
			item.split('=')
			if(item[0]==='biyaologin') {
				window.location.href="/Myorder";
			}
		})
	} 
	render() {
		return (
				<div className="Login">	
					<HeaderLogin isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
					<div className="logincontent" style={{marginTop:'60px'}}>
						<div style={{position:'relative'}}>
							<input placeholder="请输入手机号" value={this.state.userPhone} onChange={this.inputUserPhone.bind(this)} type="text" onInput={this.showvaule}/>
							<span className="clearvalue0 clearvalue" onClick={this.clearvalue} >x</span>
						</div>
						<div style={{position:'relative'}}>		
							<input placeholder="请输入登录密码" value={this.state.passWord} onChange={this.inputPassWord.bind(this)} type = {this.state.isPassword? 'password':'text'} onInput={this.showvaule}/>
							<span className="clearvalue1 clearvalue"  onClick={this.clearvalue}>x</span>
							<i className="eye" onClick={this.eyeclick}></i>
						</div>
						<p>必要不会以任何理由要求您汇款，谨防诈骗。</p>
						<div onClick={this.login.bind(this)}>
						<LoginBtn chooseStyle={this.state.chooseStyle} btncontent="登录" />
						</div>
						<LoginBtn chooseStyle={!this.state.chooseStyle} btncontent="验证码登录"/>
						<p style={{marginTop:'40px',fontSize:'16px',height:'40px'}}><a href="/Myregister">还没帐号？快速注册</a><a href = "/changepassword">忘记密码!</a></p>
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