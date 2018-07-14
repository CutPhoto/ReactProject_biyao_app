import React, {
	Component
} from 'react';
//css
import './xproduct.css';
import { connect } from 'react-redux';

class Xproduct extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			productli:[
//			{
//				name:'春夏薄款云斑纱男士船袜X6',
//				text:'不同风格自由进线云斑纱设计丶袜跟立体贴合不掉跟',
//				price:75,
//				pinjia:193,
//				src:'https://bfs.biyao.com/group1/M00/33/CB/rBACVFrZV-2AN60dAACatDBFqfU418.jpg'
//			},
//			{
//				name:'春夏薄款云斑纱男士船袜X6',
//				text:'不同风格自由进线云斑纱设计丶袜跟立体贴合不掉跟',
//				price:75,
//				pinjia:193,
//				src:'https://bfs.biyao.com/group1/M00/33/CB/rBACVFrZV-2AN60dAACatDBFqfU418.jpg'
//			},
//			{
//				name:'春夏薄款云斑纱男士船袜X6',
//				text:'不同风格自由进线云斑纱设计丶袜跟立体贴合不掉跟',
//				price:75,
//				pinjia:193,
//				src:'https://bfs.biyao.com/group1/M00/33/CB/rBACVFrZV-2AN60dAACatDBFqfU418.jpg'
//			},{
//				name:'春夏薄款云斑纱男士船袜X6',
//				text:'不同风格自由进线云斑纱设计丶袜跟立体贴合不掉跟',
//				price:75,
//				pinjia:193,
//				src:'https://bfs.biyao.com/group1/M00/33/CB/rBACVFrZV-2AN60dAACatDBFqfU418.jpg'
//			},
//			{
//				name:'春夏薄款云斑纱男士船袜X6',
//				text:'不同风格自由进线云斑纱设计丶袜跟立体贴合不掉跟',
//				price:75,
//				pinjia:193,
//				src:'https://bfs.biyao.com/group1/M00/33/CB/rBACVFrZV-2AN60dAACatDBFqfU418.jpg'
//			}
			]
		}
	}
	componentDidMount(){
			var xianshi=[]
			var arrs=[];
			var guanjian='';
			let cookiess=document.cookie;
			cookiess.split('; ').forEach((item)=>{
				arrs=item.split('=')
				if(arrs[0]=='name'){
					guanjian=arrs[1]
				}
			})
			console.log(guanjian)
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = ()=>{
			    if(xhr.readyState == 4) {
			        console.log(JSON.parse(xhr.responseText));
			        var arr=JSON.parse(xhr.responseText);
			        for(var i=0;i<arr.length;i++){
			        	if(arr[i].title.indexOf(guanjian)>=0){
			        		xianshi.push(arr[i]);
			        	}
			        }
			        this.setState({
						productli:xianshi
					})
			    }
			}
			xhr.open("get", "http://10.3.134.38:8081/getGoodsList", true);
			xhr.send(null);
	}
	render() {
		return(
			
      	<div className="xproduct">
      		<ul>
      			{
      				(function(self){
      					return self.state.productli.map((item,index)=>{
      						return <li key={index}>
					      				<img src={item.imageUrl}/>
					      				<div className="xproduct_m">
					      					<p>{item.classify}</p>
					      					<p>{item.title}</p>
					      					<ul>
					      						<li>3天生产</li>
					      					</ul>
					      					<p>￥{item.price} <span>135条评价</span></p>
					      				</div>
					      			</li>
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
		
	}
})(Xproduct);