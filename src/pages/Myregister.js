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
			chooseStyle:true,
			msgerror: '注册信息有误'
		}
		this.submitClick = this.submitClick.bind(this)
	}
	submitClick(){console.log(this)
		var tel =document.getElementById('telinput').value.trim()
		var password =document.getElementById('pasinput').value.trim()
		var msgerror = document.getElementsByClassName('msgerror')[0]
		if(/^1[3|4|5|8][0-9]\d{8}$/.test(tel)&&/[\w]{6,32}/.test(password)){
			var self = this
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4) {
					if (xhr.responseText == '注册成功！'){
						window.location.href = '/login'
					}else{
						self.setState({
							msgerror: xhr.responseText
						});
						new Promise((resolve,reject)=>{
							msgerror.className = "msgerror msganmite"
							setTimeout(()=>{
								resolve();
							},3500)
						}).then(()=>{
							msgerror.className = "msgerror"
						})
					}
				}
			}
			xhr.open('post','http://localhost:8081/signin',true)
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
			xhr.send(`userPhone=${tel}&passWord=${password}`)
		}else{
			new Promise((resolve,reject)=>{
				msgerror.className = "msgerror msganmite"
				setTimeout(()=>{
					resolve();
				},3500)
			}).then(()=>{
				msgerror.className = "msgerror"
			})
		}
	}
	render(){
		return(
			<div className="Myregister">
				<HeaderLogin isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
				<Fromcontext/>
				<div onClick={this.submitClick} style={{cursor:'pointer'}}>
					<LoginBtn chooseStyle={this.state.chooseStyle} btncontent="提交" />
				</div>
				<p style={{marginTop:'40px',fontSize:'16px',height:'40px'}}><a>已有帐号！立即登录</a></p>
				<span className="msgerror">{this.state.msgerror}</span>
			</div>
			)
	}
}
export default Myregister