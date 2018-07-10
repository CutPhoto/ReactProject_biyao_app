import React, { Component } from 'react';
import './LoginBtn.css'
class LoginBtn extends Component {
	constructor(props){
		super(props)
		this.state={
			chooseStyle:false,
			btncontent:'登录'
		}
	}
	render(){
		return(
				<div className="LoginBtn">
					<button className = {this.props.chooseStyle?'styleone':'styletwo'}>{this.props.btncontent}</button>
				</div>
			)
	}
} 
export default LoginBtn