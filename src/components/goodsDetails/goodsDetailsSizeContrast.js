import React, {
	Component
} from 'react';
import './goodsDetailsSizeContrast.css'

import GoodsDetailsChiMa from './goodsDetailsChiMa'
//html
export default class GoodsDetailsSizeContrast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowSize:false
		}
	}
	showChiMa(){
		this.setState({
			isShowSize:!this.state.isShowSize
		})
	}
	render() {
		return(
			<div className="goodsDetailsSizeContrast" onClick={this.showChiMa.bind(this)}>
		      	<div className="goodsDetailsSizeContrastIndex">
		      		<span style={{color:'#828282'}}>尺码对照表:</span>
		      		<i className="Ziconfont fr">&#xe616;</i>
		      	</div>
		      	<div style={{display:this.state.isShowSize?'block':'none'}} onClick={this.showChiMa.bind(this)}>
					<GoodsDetailsChiMa/>
				</div>
		    </div>
		);
	}
}