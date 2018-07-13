import React, {
	Component
} from "react"

import './xaddCarHeader.css';

import $ from 'jquery'

export default class XaddCarHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isDingWeiIcon:false
		}
		console.log(this.props);
	}
	
	componentDidMount(){
		$(window).scroll(()=>{
			if(window.scrollY>20){
				$(".addshopingcar_header").fadeIn();
			}else{
				$(".addshopingcar_header").fadeOut();
			}
			
		})
	}
	
	render() {
		return(
			<div className="addshopingcar_header" style={{display:'none'}}>
				<ul className="addshopingcar_header_content">
					<li className="addshopingcar_header_item">
						<i className="iconfont icon-dingwei"></i><span>商品</span>
					</li>
					<li>
						<i style={{display:this.state.isDingWeiIcon?'none':'inline-block'}} className="iconfont icon-dingwei"></i><span>评价</span>
					</li>
					<li>
						<i className="iconfont icon-dingwei"></i><span>详情</span>
					</li>
					<li>
						<i className="iconfont icon-dingwei"></i><span>推荐</span>
					</li>
				</ul>
			</div>
		)
	}
}