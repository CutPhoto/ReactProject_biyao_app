import React, {
	Component
} from 'react';
import './goodsDetailsShop.css'
//html
export default class GoodsDetailsShop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '评价'
		}
	}
	render() {
		return(
			<div className="goodsDetailsShop">
		      	<div className="supplier-top-wrap">
					<div className="supplier-img-title">
						<img className="supplier-img lazyload-img" src="https://bfs.biyao.com/group1/M00/03/AE/rBACYVkUkI2APfwPAAC7nzwI-NA595.jpg"/>
						<div className="supplier-title">亓口</div>
					</div>
					<div className="supplier-onsale">
						<div className="supplier-onsale-num">154</div>
						<div className="supplier-onsale-text">在售商品</div>
					</div>
				</div>
		    </div>
		);
	}
}