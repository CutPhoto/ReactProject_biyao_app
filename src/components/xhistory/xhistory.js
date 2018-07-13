import React, {
	Component
} from 'react';
//css
import './xhistory.css';
import { connect } from 'react-redux';

class Xhistory extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			historyli:'',
			historyshow:false
		}
	}
	componentDidMount(){
		var arr=[];
		let cookie=''
		cookie=document.cookie;
		cookie.split('; ').forEach((item)=>{
			arr=item.split('=')
			if(arr[0]==='name'){
				
				this.setState({
					historyli:arr[1],
					historyshow:true
				})
			}
		})
			
		
		
	}
	deleCook(){
		this.setState({
					historyli:'',
					historyshow:false
				})
	}
	render() {
		return(
			
      	<div className="history" style={{display: this.state.historyshow?'block':'none'}}>
			<p>历史记录<span className="iconfont222" onClick={this.deleCook.bind(this)}>&#xe73d;</span></p>				
			<div>
				<ul className="historyul" >
					<li>{this.state.historyli}</li>
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
})(Xhistory);