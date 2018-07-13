import React, {
	Component
} from "react"

import "./jingxuan.css";

import $ from 'jquery'

export default class Xjingxuan extends Component {
	constructor(props) {
		super(props)
		this.state = {
			goodsData: []
		}
	}

	componentDidMount() {
		var goodsData = JSON.parse(localStorage.getItem('goodsData')).slice(56,59)
		this.setState({
			goodsData: goodsData
		})
		
		$('.jingxuan_box').on("click",(e)=>{
			let target=e.target
			if(target.tagName.toLowerCase()==="img"){
				var goodsSuid=target.parentNode.parentNode.getAttribute('data-guid');
				var currentGoods = goodsData.filter(function(item){
	                return item.suid === goodsSuid;
	            })[0];
				console.log(currentGoods);
				localStorage.setItem('goodsSuid', JSON.stringify(currentGoods))
			}
		})
		
	}

	render() {
		return(
			<div className='jingxuan_box'>
				<h5>精选专题</h5>
				<ul>
					{
			    		this.state.goodsData.map((item,index) => {
		    				return <li className="jingxuang_item" data-guid={item.suid} key={index}>
			    						<a href="/classify/topicDetail">
											<img src={item.imageUrl}/>
										</a>
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