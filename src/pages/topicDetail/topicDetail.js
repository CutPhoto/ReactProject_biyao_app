import React, {
	Component
} from "react"

import "./topicDetail.css"

import axios from 'axios';

import $ from 'jquery'

export default class XtopicDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			goodsData: [],
			suidData: []
		}
	}

	componentDidMount() {
		
		axios.get('http://localhost:8081/getGoodsList').then(res => {
	      	
	      	const goodsData=res.data
	      	
	        this.setState({ goodsData });
	
	    });
		
		
		let suid = JSON.parse(localStorage.getItem('goodsSuid'))
		this.setState({
			suidData: suid
		})
	}

	render() {
		return(
			<div className="topicDetail_box">
				<div>
					<div className="topicDetail_header">
						<a href="/home" className="iconfont icon-shouye" style={{fontSize:'25px'}}></a>
						<span>{this.state.suidData.title}</span>
						<i></i>
					</div>
					<div className="topicDetail_banner">
						<img src={this.state.suidData.imageUrl}/>
						<p className="topicDetail_title_p1">{this.state.suidData.title}</p>
						<p className="topicDetail_title_p2">{this.state.suidData.classify}</p>
					</div>
					<div className="topicDetail_jingxuan_box">
						<h4 className="topicDetail_jingxuan_title">为您精选</h4>
						<ul className="topicDetail_jingxuan_content">
							{
								this.state.goodsData.map((item,index)=>{
									if(item.classify===this.state.suidData.classify){
										return  <li className="topicDetail_jingxuan_content_item" key={index}>
													<img src={item.imageUrl}/>
													<p className="topicDetail_jingxuan_content_item_p1">{item.title}</p>
													<p className="topicDetail_jingxuan_content_item_p2">{item.price}</p>
												</li>
									}
									
								})
							}
						</ul>
					</div>
				</div>	
			</div>
		);
	}
}