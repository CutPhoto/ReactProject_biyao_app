import React,{ Component } from 'react'
import HeaderLogin from '../Mylogin/HeaderLogin'
import LoginBtn from '../Mylogin/LoginBtn.js'
import Fromcontext from '../Myregister/Fromcontext.js'
import './Myregister.css'

class Myregister extends Component{
	constructor(props){
		super(props)
		this.state={
			isShowEditor:false,
			textcontent:'注册必要',
			chooseStyle:true
		}
	}
	render(){
		return(
			<div className="Myregister">
				<HeaderLogin isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
				<Fromcontext/>
				<LoginBtn chooseStyle={this.state.chooseStyle} btncontent="提交"/>
				<p style={{marginTop:'40px',fontSize:'16px'}}><a>已有帐号！立即登录</a></p>
			</div>
			)
	}
}
export default Myregister