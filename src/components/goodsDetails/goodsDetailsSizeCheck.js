import React, {
	Component
} from 'react';
import './goodsDetailsSizeCheck.css'
//html
export default class GoodsDetailsSizeCheck extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	closeChoose(){
		this.props.closeChoose(false);
	}
	render() {
		return(
			<div className="goodsDetailsSizeCheck">
				<div className="size-surface-wrap">
					<div className="bg-corver-size-surface"></div>
					<div className="choose-size-wrap choose-size-wrap-fadeIn">
					<div className="choose-size-top">
						<img className="choose-size-top-img" src={this.props.imageUrl.imageUrl} />
						<div className="choose-size-title-price">
							<div className="choose-size-price-text">￥<span className="choose-size-price">{this.props.imageUrl.price}</span></div>
							<div className="choose-size-duration-text">生产周期：<span className="choose-size-duration">5</span>天</div>
							<div className="choose-size-choosed-style">
								<span className="choose-size-choosed-tit">已选择：</span>
								<div className="choose-size-choosed-text">2件/白色，S，1件</div>
							</div>
						</div>
						<div className="close-choose-size" onClick={this.closeChoose.bind(this)}>
							<i className="icon">x</i>
						</div>
					</div>
					<div className="gl-choose-lens-content-wrap">
						<div className="choose-size-content"><div className="choose-title-wrap"><span className="lens-text">颜色</span><span className="lens-choosed">（已选：<i className="lens-choosed-s">2件/白色</i>）</span><div className="Specs-list"><div className="specs-detial-normalSpecs" id="17577">黑色/白色</div><div className="specs-detial-normalSpecs" id="17578">黑色/深灰</div><div className="specs-detial-normalSpecs" id="17579">黑色/藏青</div><div className="specs-detial-normalSpecs" id="16542">白色/深灰</div><div className="specs-detial-normalSpecs" id="1839">白色/藏青</div><div className="specs-detial-normalSpecs" id="16543">深灰/藏青</div><div className="specs-detial-normalSpecs specs-detial-checked" id="1840">2件/白色</div><div className="specs-detial-normalSpecs" id="1847">2件/黑色</div><div className="specs-detial-normalSpecs" id="15471">白色/浅蓝</div><div className="specs-detial-normalSpecs" id="59113">黑色/浅蓝</div></div></div><div className="choose-title-wrap"><span className="lens-text">尺寸</span><span className="lens-choosed">（已选：<i className="lens-choosed-s">S</i>）</span><div className="Specs-list"><div className="specs-detial-normalSpecs specs-detial-checked" id="1841">S</div><div className="specs-detial-normalSpecs" id="1842">M</div><div className="specs-detial-normalSpecs" id="1843">L</div><div className="specs-detial-normalSpecs" id="1844">XL</div><div className="specs-detial-normalSpecs" id="1845">XXL</div><div className="specs-detial-normalSpecs" id="1846">XXXL</div></div></div>
							<div className="choose-num-wrap">
								<div className="choose-num-test">购买数量</div>
								<div className="contral-num">
									<div className="count-reduce count-disabled">
										<span className="count-horizontal"></span>
									</div>
									<div className="buy-count">1</div>
									<div className="count-add">
										<span className="count-horizontal"></span>
										<span className="count-vertical"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="choose-size-bottom">
						<ul className="choose-bottom-btn-wrap choose-bootom-btn-con">
							<li className="buy-shopcar-choose">加入购物车</li>
							<li className="buy-now-choose">立即购买</li>
							<li className="no-store-btn none">原材料库存不足</li>
							<li className="give-red-bag none">送好友</li>
						</ul>
						<div className="buy-shopcar-choose-sure none">确定</div>
						<div className="buy-now-choose-sure none">确定</div>
					</div>
				</div>
				</div>
		      	
		    </div>
		);
	}
}