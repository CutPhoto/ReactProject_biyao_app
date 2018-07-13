import React, {
	Component
} from 'react';
//css
import './xtopss.css';
import { connect } from 'react-redux';

class Xtopss extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			cooks:[]
		}
	}
	fanhui(){
		window.location.href = '/Search'
	}
	render() {
		return(
			
      	<div className="searchs_top">
      		<div className="searchs_t">
      			<i className="iconfont110 searchs_l" onClick={this.fanhui}>&#xe605;</i>
	      		<i className="iconfont110 searchs_c">&#xe633;</i>
				<input className="searchs_ipt" type="text" placeholder="请输入您想要的商品" id="searchPreInput" />
      		</div>
      		
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
})(Xtopss);