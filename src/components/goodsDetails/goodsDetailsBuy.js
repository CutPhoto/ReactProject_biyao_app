import React, {
	Component
} from 'react';
import './goodsDetailsBuy.css'
//html
export default class GoodsDetailsBuy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '评价'
		}
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
							<span className="shopcar-num none"></span>
							<i className="Ziconfont gl-icon">&#xe635;</i>
							<span className="gl-shop-car-text">购物车</span>
						</div>
					</div>
					
					
					
						<div className="choose-gl-btn">
							<ul className="choose-bottom-btn-wrap">
								<li className="buy-shopcar">加入购物车</li>
								<li className="buy-now">立即购买</li>
							</ul>
						</div>
					
					
				</div>
		    </div>
		);
	}
}