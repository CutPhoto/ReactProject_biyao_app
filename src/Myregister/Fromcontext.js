import React,{ Component } from 'react'
import './Fromcontext.css'
class Fromcontext extends Component{
	constructor(props){
		super(props)
		this.state = {
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
	render(){
		return(
				<div className="fromcontext" style={{marginTop:'60px'}}>
					<div style={{position:'relative'}}>
						<input placeholder="请输入手机号" type="text" onInput={this.showvaule} ref='telinput' id="telinput"/>
						<span className="clearvalue0 clearvalue" onClick={this.clearvalue} >x</span>
					</div>
					<div style={{position:'relative'}}>
						<input placeholder="请输入图中验证码" type ="text" onInput={this.showvaule} ref='codeinput' id="codeinput"/>
						<span className="clearvalue0 clearvalue" onClick={this.clearvalue} >x</span>
					</div>
					<div style={{position:'relative'}}>
						<input placeholder="请输入短信验证密码" type = "text" onInput={this.showvaule} ref= 'noteinput' id="noteinput"/>
						<span className="clearvalue0 clearvalue" onClick={this.clearvalue} >x</span>
					</div>
					<div style={{position:'relative'}}>		
						<input placeholder="请输入6-32位登录密码" type = {this.state.isPassword? 'password':'text'} onInput={this.showvaule} ref='pasinput' id="pasinput"/>
						<span className="clearvalue1 clearvalue"  onClick={this.clearvalue}>x</span>
						<i className="eye" onClick={this.eyeclick}></i>
					</div>
				</div>	
			)
	}
}
export default Fromcontext