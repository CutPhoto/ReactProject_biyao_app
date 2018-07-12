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
			hejie:[
			{id:1,text:'凉感功能免烫商务短袖衬衫',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:209},
			{id:2,text:'免烫商务短袖衬衫',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:219},
			{id:3,text:'袖衬衫',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:239},
			{id:4,text:'衫免烫商务',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:229},
			{id:5,text:'免烫商务衫',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:2229},
			{id:6,text:'衫免烫商务',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:2219},
			{id:7,text:'免烫商务衫',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:22149},
			{id:8,text:'衫免烫商务',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:2294321},
			{id:9,text:'免烫商务衫',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:2291241},
			{id:10,text:'免烫商务衫',src:'https://bfs.biyao.com/group1/M00/35/22/rBACW1rWqXCAQoInAAB2IRb93tw688.jpg',price:2291241}
			]
		};
	}


			
	//template
	render() {
		return(
			<div className="classPage">
				<div className="page_top">
						<a href="#" > <i className="iconfont123">&#xe639;</i></a>
						<p>T恤</p>
				</div>
				<div className="page_box">
					<ul>
						<li>
							<p>T恤 · Armani制造商直供</p>
							<ul className="page_main">
							{
								(function(self){
									return self.state.hejie.map((item,index)=>{
										return <li key={index}>
													<a href="/products/1301065300010100001.html">
														<img src={item.src} onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" />
														<dl>
															<dt className="escp">{item.text}</dt>
															<dd>￥ {item.price}</dd>
														</dl>
													</a>
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