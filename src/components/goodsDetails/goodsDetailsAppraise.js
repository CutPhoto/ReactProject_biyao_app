import React, {
	Component
} from 'react';
import './goodsDetailsAppraise.css'
//html
export default class GoodsDetailsAppraise extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '评价'
		}
	}
	render() {
		return(
			<div className="goodsDetailsAppraise">
		      <div className="gl-comment-content">
					<div className="gl-comment-detial-title">商品评价&nbsp;&nbsp;<span>(5460)</span></div>
					<div className="gl-comment-detial">
						<div className="gl-comment-img">
							<img className="comment-avatar" src="https://bfs.biyao.com/group1/M00/2C/21/rBACYVpxYwyASHYkAABhkj7uR1c631.png" />
							<div className="gl-comment-name">b***e</div>
						</div>
						<div className="gl-comment-comment-item">诚信，衣服质量棒棒哒，穿着舒服，到货挺快，退货服务好。</div>
						<div className="gl-comment-more">查看全部评论</div>
					</div>
			  </div>
		    </div>
		);
	}
}