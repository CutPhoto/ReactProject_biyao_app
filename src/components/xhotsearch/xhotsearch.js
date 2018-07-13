import React, {
	Component
} from 'react';
//css
import './xhotsearch.css';
import { connect } from 'react-redux';

class Xhotsearch extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			
		}
	}
	render() {
		return(
			
      	<div className="hotsearch">
			<p>热门搜索</p>				
			<div>
				<ul className="hotul">
					<li>鞋</li>
					<li>门锁</li>
					<li>刀</li>
					<li>面膜</li>
					<li>霜</li>
					<li>粉</li>
					<li>纸尿裤</li>
					<li>文胸</li>
					<li>内裤</li>
					<li>裤袜</li>
					<li>衬衫</li>
					<li>袜</li>
					<li>T恤</li>
					<li>粉</li>
					<li>水</li>
				</ul>
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
})(Xhotsearch);