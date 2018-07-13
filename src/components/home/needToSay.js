import React, {
	Component
} from "react"

import './needToSay.css';

export default class Xneedtosay extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return(
			<div className="needtosay_box">
				<a href="/article" className="needtosay_content">
					<img src={require('../../static/img/needtosay.png')}/>
					<span className="txt">千万别试这几款音乐耳机，耳朵真的会怀孕！</span>
				</a>
			</div>
		)

	}
}