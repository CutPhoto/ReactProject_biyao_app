import React, {
	Component
} from 'react';
import './goodsDetailsChiMa.css'
//html
export default class GoodsDetailsChiMa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '评价'
		}
	}
	render() {
		return(
			<div className="goodsDetailsChiMa">
		      	<div className="size-surface-wrap">
					<div className="bg-corver-size-surface"></div>
					<div className="size-surface-img-wrap">
						<img className="size-surface-img img-lazyload" src="https://bfs.biyao.com/group1/M00/02/56/rBACW1kT5AaAAzVHAAB1OcxJY6Q418.jpg"/>
					</div>
				</div>
		    </div>
		);
	}
}