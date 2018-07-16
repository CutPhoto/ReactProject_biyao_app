import React, {
	Component
} from 'react';
import './goodsDetailsBuy.css'
//html
export default class GoodsDetailsBuy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toCart:false
		}
	}
	toCart(){
		this.setState({
			toCart:true
		})
		setTimeout(()=>{
			this.setState({
			toCart:false
		})
		},1000)
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
			}
		}
		xhr.open("get",`http://localhost:8081/addToCart?suid=${this.props.suid.suid}`, false);
		//4.向服务器发送请求
		xhr.send(null);
	}
	toAccount(){
		var arr = [];
		arr.push(this.props.suid);
		localStorage.setItem('settlement',JSON.stringify(arr))
		window.location.href='/settlement';
	}
	render() {
		return(
			<div className="goodsDetailsBuy">
		      	<div className="gl-footer">
					<div className="gl-other-wrap">
						<a className="customer-service">
							<i className="Ziconfont gl-icon">&#xe626;</i>
							<span className="gl-service-text" id="liveServerBtn">客服</span>
						</a>
						<div className="shop-car">
							<a href="/shoppingcar">
							<span className="shopcar-num none"></span>
							<i className="Ziconfont gl-icon">&#xe635;</i>
							<span className="gl-shop-car-text">购物车</span>
							</a>
						</div>
					</div>
					
					
					
						<div className="choose-gl-btn">
							<ul className="choose-bottom-btn-wrap">
								<li className="buy-shopcar" onClick={this.toCart.bind(this)}>加入购物车</li>
								<li className="buy-now" onClick={this.toAccount.bind(this)}>立即购买</li>
							</ul>
						</div>
						<div id="toast" style={{opacity: this.state.toCart?1:0,display:this.state.toCart?'block':'none'}}>
					        <div className="weui-mask_transparent"></div>
					        <div className="weui-toast">
					            <i className="weui-icon-success-no-circle weui-icon_toast"></i>
					            <p className="weui-toast__content">已加入购物车</p>
					        </div>
					    </div>
					
				</div>
		    </div>
		);
	}
}