import React, {
	Component
} from 'react';
//css
import './xtops.css';
import { connect } from 'react-redux';
import { Icon} from 'antd-mobile';
class Xtops extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			
		}
	}
	render() {
		return(
			
      	<div className="search_top">
      		
      		<div className="search_t">
      			<i class="iconfont110 search_l">&#xe623;</i>
	      		<i class="iconfont110 search_c">&#xe633;</i>
				<input className="search_ipt" type="text" placeholder="请输入您想要的商品" id="searchPreInput" />
				<button className="search_b">搜索</button>
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
})(Xtops);