import React, {
	Component
} from 'react';
import './goodsDetailsSize.css'
import { CSSTransitionGroup } from 'react-transition-group'
import GoodsDetailsSizeCheck from './goodsDetailsSizeCheck'
//html
export default class GoodsDetailsSize extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color:'白色',
			size:'XL',
			num:'1',
			isShowSize:false
		}
	}
	showChiMa(){
		this.setState({
			isShowSize:!this.state.isShowSize
		})
	}
	closeChoose(newBool){
		this.setState({
			isShowSize:newBool
		})
	}
	render() {
		return(
			<div className="goodsDetailsSize">
				<div onClick={this.showChiMa.bind(this)} style={{overflow: 'hidden'}}>
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
				
		      	<div style={{display:this.state.isShowSize?'block':'none'}}>
					<GoodsDetailsSizeCheck closeChoose={this.closeChoose.bind(this)} imageUrl={this.props.imageUrl}/>
				</div>	

		    </div>
		);
	}
}