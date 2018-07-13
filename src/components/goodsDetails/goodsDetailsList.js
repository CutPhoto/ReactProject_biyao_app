import React, {
	Component
} from 'react'
import '../../swiper-4.3.3.min.css'
import './goodsDetailsList.css'
import Swiper from 'swiper'
export default class GoodsDetailsList extends React.Component {
	constructor(props) {
		super(props)
		console.log(this.props.list)
		this.state = {
			
		}
	}

	componentDidMount() {
		var swiper = new Swiper('.goodsDetailsList .swiper-container', {
			spaceBetween: 5,
			slidesPerView: 3.5,
			centeredSlides: false,
			slideToClickedSlide: true,
			grabCursor: true,
			history: true,
			scrollbar: {
				el: '.goodsDetailsList .swiper-scrollbar',
				hide:true
			},
		});
	}

	render() {
		let countId = 0;
		return(
			<div className = 'goodsDetailsList'>

				<div className="swiper-container swiper-container-horizontal" style={{cursor: 'grab'}}>
					<div className="swiper-wrapper" id="swiper-wrapper">
						{
							this.props.list.map((item,index)=>{
								return 	<div className="swiper-slide swiper-slide-active" data-history={index} key={index}>
											<img src={item.imageUrl}/>
											<h2>{item.title}</h2>
											<h3>¥ {item.price}</h3>
										</div>
							})
						}
					</div>
					<div className="swiper-scrollbar"></div>
			     </div>
		     </div>
		)
	}
}