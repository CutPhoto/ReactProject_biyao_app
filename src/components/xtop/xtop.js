import React, {
	Component
} from 'react';
//css
import './xtop.css';
import { connect } from 'react-redux';
import { Icon} from 'antd-mobile';
class Xtop extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			
		}
	}
	render() {
		return(
			
      	<div className="top">
			<a href="/search" className="top_c">
				<Icon type="search" className="header-i"/>
				<span className="header-s">请输入您想要的商品</span>
			</a>
		</div>
      
		);
	}

	

}

export default connect((state) => {
	//他把store的state全部放到该组件的props里面
	return state
}, (dispatch) => {
	return {
		
	}
})(Xtop);