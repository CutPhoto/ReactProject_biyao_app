import React, {
	Component
} from "react"

import "./baozheng.css"

export default class Xbaozheng extends Component {
	constructor(prop) {
		super()
		this.state = {

		}
	}
	render() {
		return(
			<div className="baozheng_box">
				<ul>
					<li><i className="iconfont icon-103"></i>大牌制造商出品</li>
					<li><i className="iconfont icon-103"></i>七天无忧退货</li>
					<li><i className="iconfont icon-103"></i>全平台包邮</li>
				</ul>
			</div>
		);
	}
}