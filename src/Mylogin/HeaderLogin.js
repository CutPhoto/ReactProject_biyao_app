import React,{ Component } from 'react'
import './HeaderLogin.css'
import './PublicButtom.css'
class HeaderLogin extends Component {
	constructor(props){
		super(props)
		this.state = {
			// isShowEditor:false,
			// textcontent:'购物车'
		}
		this.backTohome = this.backTohome.bind(this)
	}
	backTohome(){
		window.location.href="/home";
	}
	render(){
		return (
				<div className="HeaderLogin">
					<div> 
						<i className="iconfont" onClick={this.backTohome}>&#xe648;</i>
					</div>	
					<div>{this.props.textcontent}</div>
					<div>		
						<span style = {{display:this.props.isShowEditor?'block':'none'}}><span onClick={(e)=>this.props.callback(e)}>编辑</span></span>	
					</div>	
				</div>
			)
	}
}

export default HeaderLogin