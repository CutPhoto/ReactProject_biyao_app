import React, {
	Component
} from 'react';

import './classpage.css';
class ClassPage extends Component {
	//data  S->V   V->S
	constructor(props) {
		super(props);
		//M
		this.state = {
			hejie:[],
			pagess:''
		};
	}
	componentDidMount(){
			var pagesss=window.localStorage.getItem("page");
			var hejiejie=[];
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = ()=>{
			    if(xhr.readyState == 4) {
			        console.log(JSON.parse(xhr.responseText));
			        var arr=JSON.parse(xhr.responseText);
			        for(var i=0;i<arr.length;i++){
			        	if(arr[i].classify==pagesss){
			        		hejiejie.push(arr[i]);
			        	}
			        }
			        this.setState({
						hejie:hejiejie,
						pagess:pagesss
					})
			    }
			}
			xhr.open("get", "http://localhost:8081/getGoodsList", true);
			xhr.send(null);

		
	}
	shushu(e){
		console.log(e.target.parentNode.parentNode.className)
		window.location.href = '/GoodsDetail/'+e.target.parentNode.parentNode.className
	}
			
	//template
	render() {
		return(
			<div className="classPage">
				<div className="page_top">
						<a href="#" > <i className="iconfont123">&#xe639;</i></a>
						<p>{this.state.pagess}</p>
				</div>
				<div className="page_box">
					<ul>
						<li>
							<p>{this.state.pagess} · Armani制造商直供</p>
							<ul className="page_main">
							{
								(function(self){
									return self.state.hejie.map((item,index)=>{
										return <li key={index} onClick={self.shushu.bind(self)} className={item.suid}>
													<div>
														<img src={item.imageUrl}  />
														<dl>
															<dt className="escp">{item.title}</dt>
															<dd>￥ {item.price}</dd>
														</dl>
													</div>
												</li>
									})
								})(this)
								
							}
							</ul>
							
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ClassPage;