import React, {
	Component
} from "react"

import "./tuijian.css"

import axios from 'axios';

import $ from 'jquery';

export default class Xtuijian extends Component {
	constructor(props) {
		super(props)
		this.state = {
			goodsData: []
		}
	}
	componentDidMount() {
		
		axios.get('http://qxu1142150189.my3w.com/api/getList.php').then(res => {
	      	
	      	const goodsData=res.data
	      	
	        this.setState({ goodsData });
	
	    });
		
		


		$('.weinituijian_content').on("click", (e) => {
			let target = e.target
			if(target.tagName.toLowerCase() === "img") {
				var goodsSuid = target.parentNode.getAttribute('data-guid');
				var currentGoods = this.state.goodsData.filter(function(item) {
					return item.suid === goodsSuid;
				})[0];
				localStorage.setItem('goodsSuid', JSON.stringify(currentGoods))
				window.location.href = '/goodsDetail/?suid='+goodsSuid
			}
		})
	}


	render() {
		return(
			<div className="weinituijian_box">
				<h5>为你推荐</h5>
				<ul className="weinituijian_content">
					{
						this.state.goodsData.map((item,index)=>{
								return <li data-guid={item.suid} className="weinituijian_item" key={index}>
											
												<img src={item.imageUrl}/>
												<dl className="weinituijian_item_dl">
													<dd className="weinituijian_item_da">{item[6]}</dd>
													<dd className="weinituijian_item_db">{item.title}</dd>
													<dd className="weinituijian_item_dc">{item.price}</dd>
												</dl>
											
										</li>
							
						})
					}
				</ul>
			</div>
		);
	}
}