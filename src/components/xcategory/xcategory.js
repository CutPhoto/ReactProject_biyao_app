import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import './xcategory.css';

import { Tabs, WhiteSpace } from 'antd-mobile';

class Xcategory extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
	
		}
	
	}

	render() {
		return(
			
      	<div className="category">
			<ul className="category-ul">
				<li data-cateid="279" className="escp">经典男装</li>				
				<li data-cateid="294" className="escp">潮流女装</li>			
				<li data-cateid="122" className="escp">光学眼镜</li>				
				<li data-cateid="339" className="escp firstCate-active">内衣配饰</li>				
				<li data-cateid="391" className="escp">母婴童装</li>				
				<li data-cateid="35" className="escp">男女鞋靴</li>				
				<li data-cateid="39" className="escp">户外运动</li>				
				<li data-cateid="153" className="escp">箱包出行</li>				
				<li data-cateid="119" className="escp">美妆个护</li>				
				<li data-cateid="355" className="escp">生活居家</li>				
				<li data-cateid="51" className="escp">厨具水具</li>				
				<li data-cateid="334" className="escp">家用电器</li>				
				<li data-cateid="369" className="escp">家装五金</li>				
				<li data-cateid="10" className="escp">家居家具</li>				
				<li data-cateid="223" className="escp">3C数码</li>				
				<li data-cateid="429" className="escp">汽车配件</li>	
				<li data-cateid="546" className="escp">医疗保健</li>
				<li data-cateid="433" className="escp">个性定制</li>
			</ul>
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
})(Xcategory);


