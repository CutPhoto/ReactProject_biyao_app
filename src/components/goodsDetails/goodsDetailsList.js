import React, {
	Component
} from 'react'
import '../../swiper-4.3.3.min.css'
import './goodsDetailsList.css'
import Swiper from 'swiper'
export default class GoodsDetailsList extends React.Component {
	constructor() {
		super()
		this.state = {
			fristImgSrc: 'https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg',
			imgsrc: ['https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg', 'https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg', 'https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg', 'https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg', 'https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg']
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
						<div className="swiper-slide swiper-slide-active" data-history="slide1">
							Slide 1
						</div>
						<div className="swiper-slide swiper-slide-next" data-history="slide2">
							Slide 2</div>
						<div className="swiper-slide" data-history="slide3">
							Slide 3
						</div>
						<div className="swiper-slide" data-history="slide4">
							Slide 4
						</div>
						<div className="swiper-slide" data-history="slide5">
							Slide 5
						</div>
						<div className="swiper-slide" data-history="slide6">
							Slide 6
						</div>
						<div className="swiper-slide" data-history="slide7">
							Slide 7
						</div>
						<div className="swiper-slide" data-history="slide8">
							Slide 8
						</div>
						<div className="swiper-slide" data-history="slide9">
							Slide 9
						</div>
					</div>
					<div className="swiper-scrollbar"></div>
			     </div>
		     </div>
		)
	}
}