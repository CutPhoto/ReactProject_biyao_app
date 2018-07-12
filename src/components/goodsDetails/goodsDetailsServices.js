import React, {
	Component
} from 'react';
//样式
import './goodsDetailsServices.css'
//html
export default class GoodsDetailsServices extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return(
			<div className="goodsDetailsServices">
		        <section className="gl-service-wrap">
				
					<ul className="gl-service-list">
						
							<li><i className="Ziconfont">&#xe656;</i>7天退换</li>
						
							<li><i className="Ziconfont">&#xe656;</i>先行赔付</li>
						
							<li><i className="Ziconfont">&#xe656;</i>超时赔偿</li>
						
							<li><i className="Ziconfont">&#xe656;</i>顺丰包邮</li>
						
						<li><i className="Ziconfont">&#xe616;</i></li>
					</ul>
				
				</section>
		    </div>
		);
	}
}