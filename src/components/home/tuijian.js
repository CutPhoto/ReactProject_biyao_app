import React, {
	Component
} from "react"

import "./tuijian.css"

export default class Xtuijian extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tjData: [{
				imgurl: require('../../static/img/jxman.gif'),
				provide:'Henkel制造商直供',
				title: '好评999+  泰国天然乳胶',
				price: '￥169'
			},{
				imgurl: require('../../static/img/huayang.png'),
				provide:'Henkel制造商直供',
				title: '好评999+  泰国天然乳胶',
				price: '￥169'
			},{
				imgurl: require('../../static/img/sports.png'),
				provide:'Henkel制造商直供',
				title: '好评999+  泰国天然乳胶',
				price: '￥169'
			},{
				imgurl: require('../../static/img/xzsdbt.jpg'),
				provide:'Henkel制造商直供',
				title: '好评999+  泰国天然乳胶',
				price: '￥169'
			},{
				imgurl: require('../../static/img/mengwa.png'),
				provide:'Henkel制造商直供',
				title: '好评999+  泰国天然乳胶',
				price: '￥169'
			}]
		}
	}
	render() {
		return(
			<div className="weinituijian_box">
				<h5>为你推荐</h5>
				<ul className="weinituijian_content">
					{
						this.state.tjData.map((item,index)=>{
							return <li className="weinituijian_item" key={index}>
										<a>
											<img src={item.imgurl}/>
											<dl className="weinituijian_item_dl">
												<dd className="weinituijian_item_da">{item.provide}</dd>
												<dd className="weinituijian_item_db">{item.title}</dd>
												<dd className="weinituijian_item_dc">{item.price}</dd>
											</dl>
										</a>
									</li>
						})
					}
				</ul>
			</div>
		);
	}
}