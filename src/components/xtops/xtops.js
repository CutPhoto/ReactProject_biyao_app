import React, {
	Component
} from 'react';
//css
import './xtops.css';
import { connect } from 'react-redux';

class Xtops extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			cooks:[]
		}
	}
	fanHui(){
		window.location.href = '/Classify'
	}
	searchGoods(){
		var cook=document.getElementsByClassName('search_ipt')[0].value;
		this.state.cooks.push(cook)
		this.setState({
			cooks:this.state.cooks
		})
		document.cookie="name="+this.state.cooks
		console.log(this.state.cooks)
		window.location.href = '/Search/result'
		
		
	}
	render() {
		return(
			
      	<div className="search_top">
      		
      		<div className="search_t">
      			<i className="iconfont110 search_l" onClick={this.fanHui}>&#xe605;</i>
	      		<i className="iconfont110 search_c">&#xe633;</i>
				<input className="search_ipt" type="text" placeholder="请输入您想要的商品" id="searchPreInput" />
				<button className="search_b" onClick={this.searchGoods.bind(this)}>搜索</button>
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