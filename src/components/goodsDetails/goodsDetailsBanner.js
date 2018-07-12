import React, {
	Component
} from 'react'
import '../../swiper-4.3.3.min.css'
import './goodsDetailsBanner.css'
import Swiper from 'swiper'
export default class GoodsDetailsBanner extends React.Component {
	constructor() {
		super()
		this.state = {
			fristImgSrc:'https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg',
			imgsrc: ['https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg','https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg','https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg','https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg','https://bfs.biyao.com/group1/M00/3F/A2/rBACYVsx1C2AFJ73AACFq657mFQ773.jpg']
		}
	}

	componentDidMount() {
		var mySwiper = new Swiper('.goodsDtails_banner .swiper-container', {
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				renderCustom: function(swiper, current, total) {
					return current + ' / ' + total;
				}
			},
		})
	}

	render() {
		let countId = 0;
		return(
			<div className = 'goodsDtails_banner'>
		        	<div className='swiper-container'>
		            <div className='swiper-wrapper'>
		            {
				    		this.state.imgsrc.map((url) => {
				    			return <div className="swiper-slide" key={countId++} >
				    						<img className="banner_img" src={url} />
				    				   </div>
				    		})
				    	}
		         	</div>
		            <div className="swiper-pagination" style={{
		            		
		            		backgroundColor:'rgba(0,0,0,.3)',
		            		borderRadius:'10px'
		            	}}>
		            </div>
	            </div>
        		</div>
		)
	}
}