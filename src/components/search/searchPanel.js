import React, {
	Component
} from "react"

import './searchPanel.css'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			historyData:['皮带','皮带']
		}
	}
	
	render() {
		let countId = 0;
		return(
			<div className="search_panel">
				<div className="search_history">
					<div className="search_history_title">
						<span>历史记录</span>
						<i className="search_history_remove iconfont icon-shanchu" style={{
							fontSize:'20px'
						}}></i>
					</div>
					<ul className="search_history_log">
						{
							this.state.historyData.map((i)=>{
								return <li key={countId++}>{i}</li>
							})
						}
					</ul>
				</div>
				<div className="search_panel_ge"></div>
				<div className="search_panel_rm">
					<p className="search_panel_title">热门搜索</p>
					<ul className="search_history_log">
						<li>伞</li>
						<li>皮带</li>
						<li>洗面奶</li>
						<li>眼霜</li>
						<li>口红</li>
						<li>袜子</li>
						<li>行李箱</li>
						<li>洗发水</li>
						<li>耳机</li>
						<li>面膜</li>
						<li>电动牙刷</li>
						<li>拖鞋</li>
						<li>男士内裤</li>
						<li>内裤</li>
						<li>眼镜</li>
					</ul>
				</div>
			</div>
			
		)

	}
}