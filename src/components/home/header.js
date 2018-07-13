import React, {
	Component
} from 'react'
import '../../swiper-4.3.3.min.css'
import './header.css'
import Swiper from 'swiper'

export default class Xheader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			navStyle: '',
			bool: true
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
					<a href="/searchResult" className="header-search"><i className="header-search-icon iconfont icon-sousuo"></i><span>请输入您想要的商品</span></a>
				</div>
				<div className="header-nav">
					<div className="swiper-container hid_drag_box">
						<ul className="swiper-wrapper hid_drag_ul">
							<li className='swiper-slide'>
								<a className={this.state.navStyle}>推荐</a>
							</li>
							<li className='swiper-slide'>
								<a>经典男装</a>
							</li>
							<li className='swiper-slide'>
								<a >潮流女装</a>
							</li>
							<li className='swiper-slide'>
								<a >光学眼镜</a>
							</li>
							<li className='swiper-slide'>
								<a >内衣配饰</a>
							</li>
							<li className='swiper-slide'>
								<a >母婴童装</a>
							</li>
						
							<li className='swiper-slide'>
								<a >男女鞋靴</a>
							</li>
							<li className='swiper-slide'>
								<a >户外运动</a>
							</li>
							<li className='swiper-slide'>
								<a >箱包出行</a>
							</li>
							<li className='swiper-slide'>
								<a >美妆个护</a>
							</li>
							<li className='swiper-slide'>
								<a >生活居家</a>
							</li>
							<li className='swiper-slide'>
								<a >厨具水具</a>
							</li>
							<li className='swiper-slide'>
								<a >家用电器</a>
							</li>
							<li className='swiper-slide'>
								<a >家装五金</a>
							</li>
							<li className='swiper-slide'>
								<a >家居家具</a>
							</li>
							<li className='swiper-slide'>
								<a >3C数码</a>
							</li>
							<li className='swiper-slide'>
								<a >汽车配件</a>
							</li>
							<li className='swiper-slide'>
								<a >医疗保健</a>
							</li>
							<li className='swiper-slide'>
								<a >个性定制</a>
							</li>
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
								<li className="">
									<a>推荐</a>
								</li>
								<li>
									<a className="" >经典男装</a>	
								</li>
								<li>
									<a className="" >潮流女装</a>	
								</li>
								<li>
									<a className="" >光学眼镜</a>	
								</li>
								<li>
									<a className="" >内衣配饰</a>
								</li>
								<li>
									<a className="" >母婴童装</a>
								</li>
								<li>
									<a className="" >男女鞋靴</a>
								</li>
								<li>
									<a className="" >户外运动</a>	
								</li>
								<li>
									<a className="" >箱包出行</a>
								</li>
								<li>
									<a className="" >美妆个护</a>
								</li>
								<li>
									<a className="" >生活居家</a>	
								</li>
								<li>
									<a className="" >厨具水具</a>
								</li>
								<li>
									<a className="" >家用电器</a>
								</li>
								<li>
									<a className="" >家装五金</a>
								</li>
								<li>
									<a className="" >家居家具</a>
								</li>
								<li>
									<a className="" >3C数码</a>
								</li>
								<li>
									<a className="" >汽车配件</a>
								</li>
								<li>
									<a className="" >医疗保健</a>
								</li>
								<li>
									<a className="" >个性定制</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		)
	}
}