import React,{ Component } from 'react'
import HeaderLogin from '../Mylogin/HeaderLogin'
import LoginBtn from '../Mylogin/LoginBtn.js'
import Fromcontext from '../Myregister/Fromcontext.js'
import './Changepassword.css'

class Changepassword extends Component{
	constructor(props){
		super(props)
		this.state={
			isShowEditor:false,
			textcontent:'修改密码',
			chooseStyle:true
		}
	}
	render(){
		return(
			<div className="Changepassword">
				<HeaderLogin isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
				<Fromcontext/>
				<LoginBtn chooseStyle={this.state.chooseStyle} btncontent="提交"/>	
			</div>
			)
	}
}
export default Changepassword