import React, {
	Component
} from 'react';
import './goodsDetailsTitle.css'
//html
export default class GoodsDetailsTitle extends Component {
	constructor(props) {
		super();
		this.state = {
			title:'超柔纯棉洗脸巾三盒装',
			price:'68',
			supplierBackground:'洁柔制造商直供'
		}
	}
	render() {
		return(
			<div className="goodsDetailsTitle">
		        <div className="gl-title">{this.state.title}</div>
		        <h3 className="gl-salePoint">制作精巧,设计新颖,品质卓越</h3>
		        <div className="changshang">
		        		<div className="fl">
			        		<span className="gl-price">{this.state.price}</span>
			        		<a className="gl-send-friends" href='#'>
			        			<i></i>
			        			送好友
			        		</a>
		        		</div>
		        		<div className="fr gl-duration-wrap">
		        			<img src="https://static.biyao.com/m/img/base/produce_cycle.png?v=biyao_015ebc2"/>
		        			<span>生产周期：5天</span>
		        		</div>
	        		</div>
	        		<div className="maker-label">
					<span className="labels">{this.state.supplierBackground}</span>
				</div>
		    </div>
		);
	}
}