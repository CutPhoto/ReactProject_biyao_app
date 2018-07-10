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
			gory:[
				{id:279,text:'经典男装',className:'escp'},
				{id:294,text:'潮流女装',className:'escp'},
				{id:122,text:'光学眼镜',className:'escp'},
				{id:339,text:'内衣配饰',className:'escp'},
				{id:391,text:'母婴童装',className:'escp'},
				{id:35,text:'男女鞋靴',className:'escp'},
				{id:39,text:'户外运动',className:'escp'},
				{id:153,text:'箱包出行',className:'escp'},
				{id:119,text:'美妆个护',className:'escp'},
				{id:355,text:'生活居家',className:'escp'},
				{id:51,text:'厨具水具',className:'escp'},
				{id:369,text:'家装五金',className:'escp'},
				{id:10,text:'家居家具',className:'escp'},
				{id:223,text:'3C数码',className:'escp'},
				{id:429,text:'汽车配件',className:'escp'},
				{id:546,text:'医疗保健',className:'escp'},
				{id:433,text:'个性定制',className:'escp'}
			]
		}
	
	}
	
	render() {
		return(
			
      	<div className="category">

      			
      		
			<ul className="category-ul">
			{
				(function(self){
					return self.state.gory.map((item,index)=>{
						return <li key={index} data-cateid={item.id} className={item.className}  onClick={self.props.goryClick.bind(self)}>{item.text}</li>
					})
				})(this)
			}
								
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
		goryClick: (self) => {
			var id = self.target.getAttribute('data-cateid');
			var lists = document.querySelectorAll('.category-ul li');
			console.log(lists);
			for(var i=0;i<lists.length;i++){
				lists[i].className='escp'
			}
			self.target.className='escps'
			//可以触发多个
			dispatch({
				type: 'goryClick',
				id:id	
			})
		}
	}
})(Xcategory);
