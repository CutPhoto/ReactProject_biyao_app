import React,{ Component } from 'react'
import PublicButtom from '../Mylogin/PublicButtom'
import  './Myorder.css'
class Myorder extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userPhone:null
		}
		this.exitlogin = this.exitlogin.bind(this)
	}
	componentWillMount() {
		var cookies = document.cookie;
		if(cookies){
			var arr =cookies.split('; ');
			arr.forEach((item)=>{
				var items = item.split('=')
				if(items[0]=="biyaologin"){
					if(!items[1])
					window.location.href = "/login";
					this.setState({
						userPhone: items[1]
					})
				}
			})
		}else{
			window.location.href = "/login";
		}
	} 
	exitlogin() {
		var now = new Date();
		now.setDate(now.getDate()- 1)
		document.cookie = `biyaologin = null; expires=${now.toUTCString()}; path=/ `
		window.location.href = "/login";
	}
	render(){
		return(
				<div className="Myorder">
					<div className="Myorderheader">
						<p>欢迎！{this.state.userPhone}</p>
					</div>	
					<div>
						<p>我的订单<i>&gt;</i></p>
						<div className="iconText">
							<span>
								<i className="iconfont1">&#xe621;</i><br/>
								待付款
							</span>	
							<span>
								<i className="iconfont1">&#xe6e4;</i><br/>
								生成中
							</span>		
							<span>	
								<i className="iconfont1">&#xe64a;</i><br/>
								待收货
							</span>		
							<span>	
								<i className="iconfont1">&#xe639;</i><br/>
								待评价
							</span>	
                            <span>
								<i className="iconfont1">&#xe614;</i><br/>
								退款/售后
							</span>
						</div>	
					</div>
					<div>
						<p>我的拼团<i>&gt;</i></p>
						<p>我的红包<i>&gt;</i></p>
						<p>我要开店<i>&gt;</i></p>
						<p>我的余额<i>&gt;</i></p>
						<p>我的地址<i>&gt;</i></p>
						<p>修改密码<i>&gt;</i></p>
						<p>设置支付密码<i>&gt;</i></p>
						<p>商家入驻<i>&gt;</i></p>	
						<p>我的客服<i>&gt;</i></p>
						<p>客服新消息<i>&gt;</i></p>
					</div>
					<div>关注“必要”微信服务号获取订单最新状态！</div>
					<div style={{marginBottom:'60px'}} className="bottomdiv">
						<div>
							<a>下载App</a>
							<a>关于必要</a>
						</div>
						<div><a>{this.state.userPhone}</a><a>|</a><a onClick = {this.exitlogin}>退出</a></div>
						<div>Copyright © 2018, BIYAO.COM</div>
					</div>
					<PublicButtom />
				</div>	
			)
	}
}
export default Myorder