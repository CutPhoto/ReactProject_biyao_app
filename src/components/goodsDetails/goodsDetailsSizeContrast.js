import React, {
	Component
} from 'react';
import './goodsDetailsSizeContrast.css'
//html
export default class GoodsDetailsSizeContrast extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return(
			<div className="goodsDetailsSizeContrast">
		      	<div className="goodsDetailsSizeContrastIndex">
		      		<span style={{color:'#828282'}}>尺码对照表:</span>
		      		<i className="Ziconfont fr">&#xe616;</i>
		      	</div>
		      	<div className="size-surface-img-wrap" style={{display:'none'}}>
					<img className="size-surface-img img-lazyload" src="https://bfs.biyao.com/group1/M00/41/37/rBACW1s8LTCARHbYAAFMXTWGeIk646.jpg" />
				</div>
		    </div>
		);
	}
}