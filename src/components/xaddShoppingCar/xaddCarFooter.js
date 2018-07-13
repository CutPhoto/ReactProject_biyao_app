import React, {
	Component
} from "react"

import './xaddCarFooter.css';

export default class XaddCarFooter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render() {
		return(
			<div className="addcarfooter_box">
				<div className="addcarfooter-left-content">
					<a className="addcarfooter_customer_service">
						<i className="addcarfooter_server_icon iconfont icon-more"></i>
						<span className="addcarfooter_server_text">客服</span>
					</a>
					<div className="addcarfooter_left_tocar">
						<span className="shopcar_num">8</span>
						<i className="addcarfooter_car_icon iconfont icon-gouwuche1"></i>
						<span className="addcarfooter_car_text">购物车</span>
					</div>
				</div>
		
				<div className="addcarfooter-right-box">
					<ul className="addcarfooter-right-content">
						<li className="addcarfooter_right_shopcar">加入购物车</li>
						<li className="addcarfooter_right_buynow">立即购买</li>
					</ul>
				</div>
				
			</div>
		)
	}
}