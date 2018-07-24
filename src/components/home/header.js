import React, {
	Component
} from 'react'
import '../../swiper-4.3.3.min.css'
import './header.css'
import Swiper from 'swiper'

import {connect} from 'react-redux';

import $ from 'jquery'

class Xheader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			textItem:[
			{text:'推荐'},
			{text:'经典男装'},
			{text:'潮流女装'},
			{text:'光学眼镜'},
			{text:'内衣配饰'},
			{text:'母婴童装'},
			{text:'男女鞋靴'},
			{text:'户外运动'},
			{text:'箱包出行'},
			{text:'美妆个护'},
			{text:'生活居家'},
			{text:'厨具水具'},
			{text:'家用电器'},
			{text:'家装五金'},
			{text:'家居家具'},
			{text:'3C数码'},
			{text:'汽车配件'},
			{text:'医疗保健'},
			{text:'个性定制'}
			],
			navStyle: '',
			bool: true,
			nowIndex:0
		}
	}

	componentDidMount() {
		var mySwiper = new Swiper('.header-nav .swiper-container', {
			slidesPerView: 4,
			slideToClickedSlide: true,
			on: {
				click: function() {}
			}

		})
	}

	navSortArrow() {
		this.setState({
			bool: !this.state.bool
		})
	}
	

	render() {
		return(
			<div className="biyao_header">
				<div className='header-search-box'>
					<a href="/search/searchResult" className="header-search"><i className="header-search-icon iconfont icon-sousuo"></i><span>请输入您想要的商品</span></a>
				</div>
				<div className="header-nav">
					<div className="swiper-container hid_drag_box">
						<ul className="swiper-wrapper hid_drag_ul">
							{
								this.state.textItem.map((item,index)=>{
									return <li className='swiper-slide' key={index}>
												<a>{item.text}</a>
											</li>
								})
							}	
						</ul>
					</div>
					<span onClick={this.navSortArrow.bind(this)} className="navArrow_icon_down iconfont icon-chevron-copy" id="slide-on"></span>
					<div className="nav_sort_box" id="nav_sort_box" style={{display:this.state.bool?'none':'block'}}>
						<div className="nav_sort_title">
							<span>全部频道</span>
							<span onClick={this.navSortArrow.bind(this)} className="navArrow_icon_up iconfont icon-jiantou"></span>
						</div>
						<div className="click_show_sort">
							<ul className='click_show_ul'>
								{
									this.state.textItem.map((item,index)=>{
										return <li key={index}>
													<a>{item.text}</a>
												</li>
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Xheader;