import React, {
	Component
} from 'react';
//css
import './xsearchnav.css';
import { connect } from 'react-redux';

class Xsearchnav extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			ion:'up'
		}
	}
	shangXia(){
		var fuhao=document.getElementsByTagName('li')[2].className;
		var id='';
		var fangxiang=''
		console.log(fuhao)
		if(fuhao=='nav_ion'){
			document.getElementsByTagName('li')[2].className='nav_upion'
			document.getElementsByTagName('i')[2].innerHTML='&#xe60a;'
			fangxiang='up'
		}else if(fuhao=='nav_upion'){
			document.getElementsByTagName('li')[2].className='nav_downion'
			document.getElementsByTagName('i')[2].innerHTML='&#xe65c;'
			fangxiang='down'
		}else{
			document.getElementsByTagName('li')[2].className='nav_upion'
			document.getElementsByTagName('i')[2].innerHTML='&#xe60a;'
			fangxiang='up'
		}
		this.setState({
				ion:fangxiang
			})
		console.log(this.state.ion)
	}
	render() {
		return(
			
      	<div className="xsearchnav">
      		<ul>
      			<li>综合</li>
      			<li>销量</li>
      			<li className='nav_ion' onClick={this.shangXia.bind(this)}>价格<i className="iconfont012">&#xe655;</i></li>
      			<li>筛选<span className="iconfont012">&#xe628;</span></li>
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
})(Xsearchnav);