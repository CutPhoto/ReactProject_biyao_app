import React, {
	Component
} from "react"

import "./jingxuan.css"

export default class Xjingxuan extends Component {
	constructor(props) {
		super(props)
		this.state = {
			jxData:[{
				imgurl:require('../../static/img/jxman.gif'),
				title:'男神夏季穿搭',
				price:'99元起'
			},{
				imgurl:require('../../static/img/xzsdbt.jpg'),
				title:'小装饰大不同',
				price:'79元起'
			},{
				imgurl:require('../../static/img/cfxsy.jpg'),
				title:'厨房新视野',
				price:'49元起'
			}]
		}
	}
	render() {
		return(
			<div className='jingxuan_box'>
				<h5>精选专题</h5>
				<ul>
					{
			    		this.state.jxData.map((item,index) => {
			    			return <li className="jingxuang_item" key={index}>
										<img src={item.imgurl}/>
										<div className="jingxuan_txt">
											<span>{item.title}</span>
											<span className="jingxuan_sprice">{item.price}</span>
										</div>
									</li>
			    		})
			    	}
				</ul>
			</div>
		);
	}
}