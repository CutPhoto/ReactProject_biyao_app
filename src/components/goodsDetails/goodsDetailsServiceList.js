import React, {
	Component
} from 'react';
//html
class GoodsDetailsServiceList extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return(
			<div classNameName="goodsDetailsServiceList">
		       <div className="supplier-services-detial-wrap choose-size-wrap-fadeIn">
					<div className="supplier-detial-top">服务说明</div>
					
					<ul className="supplier-detial-content">
						
							<li className="supplier-detial-item">
								<div className="supplier-detial-right-con">
									<div className="supplier-detial-title">7天无忧退货</div>
									<div className="supplier-detial-text">根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页。</div>
								</div>
							</li>
						
							<li className="supplier-detial-item">
								
								<div className="supplier-detial-right-con">
									<div className="supplier-detial-title">先行赔付</div>
									<div className="supplier-detial-text">争议可申诉，申诉成功，立即退款。</div>
								</div>
							</li>
						
							<li className="supplier-detial-item">
								
								<div className="supplier-detial-right-con">
									<div className="supplier-detial-title">超时赔偿</div>
									<div className="supplier-detial-text">未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。</div>
								</div>
							</li>
						
							<li className="supplier-detial-item">
								
								<div className="supplier-detial-right-con">
									<div className="supplier-detial-title">顺丰包邮</div>
									<div className="supplier-detial-text">运费由商家承担</div>
								</div>
							</li>
						
					</ul>
				
				</div>
		    </div>
		);
	}
}