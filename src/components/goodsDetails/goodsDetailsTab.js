import React, {
	Component
} from 'react';
import './goodsDetailsTab.css'
//html
export default class GoodsDetailsTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title:this.props.type
		}
	}
	render() {
		return(
			<div className="goodsDetailsTab">
		      	<div className="gl-comment-title gl-evaluate"><span>{this.state.title}</span></div>
		    </div>
		);
	}
}