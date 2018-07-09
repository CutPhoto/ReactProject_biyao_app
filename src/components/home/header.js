import React, {
	Component
} from "react"

import "./header.css"

class Xheader extends Component {
	constructor(prop) {
		super()
		this.state = {

		}
	}
	render() {
		return(
			<a className="header-search"><i></i><span>请输入您想要的商品</span></a>
		);
	}
}
export default Xheader