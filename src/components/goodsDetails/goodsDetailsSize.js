import React, {
	Component
} from 'react';
import './goodsDetailsSize.css'
//html
export default class GoodsDetailsSize extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color:'白色',
			size:'XL',
			num:'1'
		}
	}
	render() {
		return(
			<div className="goodsDetailsSize">
		      	<div className="fl">
		      		<span style={{color:'#828282'}}>已选择:</span>
		      		<span style={{marginLeft:'10px',color:"#353535"}}>
			      		{
			      			this.state.color+', '+
			      			this.state.size+', '+
			      			this.state.num+'件'
			      		}
		      		</span>
		      	</div>
		      	<i className="Ziconfont fr">&#xe616;</i>
		      	
		    </div>
		);
	}
}