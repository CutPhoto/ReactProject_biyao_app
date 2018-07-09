import React, {
	Component
} from 'react';
//css
import './xcateList.css';
import { connect } from 'react-redux';
import { Icon} from 'antd-mobile';
class XcateList extends Component {
	constructor(props) {
		super(props);
		//类实例化，执行
		this.state = {
			
		}
	}
	render() {
		return(
			
      	<div className="cateList">
      		<ul>
			<li data-cateid="279" className="cateList-first ">
					
						<a href="#" idx="0" className="top-banner">
							<img src="https://bfs.biyao.com/group1/M00/3A/08/rBACVFsRFfqAQMYSAACXCY0Timo099.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" />
						</a>
					
					<ul>
							<li className="cateList-second">
								<div className="list-hd">—— 男士内搭    ——</div>
								<ul className="clear">
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=281">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8rp-ABubpAAAXrfGO1-4229.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>T恤</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=283">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/41/72/rBACW1s8rryATyfEAAAdQZ9vDZI578.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>衬衫</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=282">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8rsSANHcbAAAa7-PkbUg551.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>POLO衫</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=286">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8rtaAAURhAAAapbUcdCQ208.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>针织衫</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=285">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/41/72/rBACW1s8rt-ACC6ZAAAaYqmu99Q060.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>卫衣</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=288">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/35/7C/rBACYVrZYpSAewMhAAAe1Vy41Og669.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>马甲</dd>
												</dl>
											</a>
										</li>
									
								</ul>
							</li>
						
							<li className="cateList-second">
								<div className="list-hd">—— 男士外套 ——</div>
								<ul className="clear">
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=494">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/41/6B/rBACYVs8rvKANN2aAAAgQ0P183Y591.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>西服套装</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=297">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/3A/45/rBACYVsFNcOAYw7zAAAdS-YPgGc381.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>皮衣/夹克</dd>
												</dl>
											</a>
										</li>
									
								</ul>
							</li>
						
							<li className="cateList-second">
								<div className="list-hd">—— 男士下装 ——</div>
								<ul className="clear">
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=291">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/41/6C/rBACYVs8r4WAJ0e5AAAbTTnKW2w264.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>牛仔裤</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=293">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8r42AUZCcAAAVuBO4AMI152.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>西裤</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=290">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/41/72/rBACW1s8r5yAY9KjAAAVubTYydk462.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>短裤</dd>
												</dl>
											</a>
										</li>
									
										<li className="cateList-third">
											<a href="/classify/middlePage?pageType=thirdClassify&amp;categoryId=292">
												<dl>
													<dt><img src="https://bfs.biyao.com/group1/M00/41/6C/rBACYVs8sPiAfw_FAAAWLmbfJ-k041.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'" /></dt>
													<dd>休闲裤</dd>
												</dl>
											</a>
										</li>
									
								</ul>
							</li>
						
					</ul>
				</li>
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
})(XcateList);