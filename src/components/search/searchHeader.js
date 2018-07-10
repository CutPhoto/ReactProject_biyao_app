import React, {
	Component
} from "react"

import './searchHeader.css'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sousuoStyle:false
		}
	}
	
	getTxtValut(){
		this.setState({
			sousuoStyle:true
		})
	}
	
	
	
	render() {
		return(
			<div className="search_result_box">
				<ul className="search_result_header">
					<li>
						<a href="/home" className='search_arrowleft iconfont icon-jiantou3' style={{fontSize:'35px'}}></a>
					</li>
					<li className="search_result_txt">
						<i className="search_result_icon iconfont icon-sousuo"></i>
						<input onInput={this.getTxtValut.bind(this)} type="search" placeholder="请输入您想要的商品" id="searchPreInput"/>
					</li>
					<li className="search_result_btn" style={{
						backgroundColor:this.state.sousuoStyle?'purple':'#e8e8e8'
					}}>搜索</li>
				</ul>
			</div>
		)

	}
}