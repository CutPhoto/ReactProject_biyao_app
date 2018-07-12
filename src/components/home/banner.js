import React, {
	Component
} from 'react'
import '../../swiper-4.3.3.min.css'
import './banner.css'
import Swiper from 'swiper'

export default class Banner extends React.Component {
	constructor() {
		super()
		this.state = {
			imgsrc: ['https://bfs.biyao.com/group1/M00/41/F0/rBACW1s_Jp-AQ_vHAADO88ngwtQ410.jpg',
			'https://bfs.biyao.com/group1/M00/41/EA/rBACYVs_JsqAD_55AACOt-fwE_M403.jpg',
			'https://bfs.biyao.com/group1/M00/41/EA/rBACYVs_JvSAEjNsAAByuu4Gfis005.jpg',
			'https://bfs.biyao.com/group1/M00/41/EA/rBACYVs_JxOAZsQHAACvUgIrYjM517.jpg',
			'https://bfs.biyao.com/group1/M00/40/3C/rBACVFs_LjaACtnTAACi9oJteqs745.jpg',
			'https://bfs.biyao.com/group1/M00/41/F1/rBACW1s_Jz-ADtddAADEz8yWMWw855.jpg']
		}
	}

	componentDidMount() {
		var mySwiper = new Swiper('.home_banner .swiper-container', {
			loop : true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
			},
		})
	}

	render() {
		let countId = 0;
		return(
			<div className='home_banner'>
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
	            		textAlign:'right',
	            	}}></div>
	            </div>
        	</div>
		)
	}
}