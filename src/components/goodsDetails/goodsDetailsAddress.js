import React, {
	Component
} from 'react';
import './goodsDetailsAddress.css'
//html
export default class GoodsDetailsAddress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sheng:'广东省',
			shi:'广州市',
			qu:'天河区'
		}
	}
	render() {
		return(
			<div className="goodsDetailsAddress">
		      	<div className="fl">
		      		<span style={{color:'#828282'}}>配送至:</span>
		      		
		      		<span style={{marginLeft:'10px',color:"#353535"}}>
		      			<i className="Ziconfont" style={{color:'#7e4395'}}>&#xe609;</i>
			      		{
			      			this.state.sheng+','+
			      			this.state.shi+','+
			      			this.state.qu
			      		}
		      		</span>
		      	</div>
		      	<i className="Ziconfont fr">&#xe616;</i>
		      	
		    </div>
		);
	}
}