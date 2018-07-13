import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './base.css';
//页面放这里
import ShoppingCar from './pages/ShoppingCar'
import Login from './pages/Login'
import Myregister from './pages/Myregister'
import Changepassword from './pages/Changepassword'
import Myorder from './pages/Myorder'

import GoodsDetail from './pages/goodsDetail/goodsDetail'
//引入阿里ant样式
// import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
import 'weui';
import './static/iconfont/iconfont.css';

//redux Provider是把store用在所有组件中
import { Provider } from 'react-redux';
//createStore是创建仓库的方法
import { createStore } from 'redux';
//引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Classify from './pages/classify/classify.js';

//引入首页
import Home from './pages/home';
//返回顶部
import Backtop from './components/backTop';

//引入搜索结果页
import SearchResult from './pages/searchResult';
//引入必要说article
import SbysArticle from './pages/bysArticle';


import Search from './pages/search/search.js';
import Classpage from './pages/classpage/classpage.js';

import AppraiseList from './pages/appraiseList/appraiseList.js';
const store = createStore((state = {
	
	id:279
}, action) => {
	const count = state.count
	switch(action.type) {
		//触发动作
		case 'goryClick':
			return {
				
				id: action.id
			}
			
		
		default:
			return state

	}
});

ReactDOM.render(
	<Router>
		<Provider store={ store } >
			<div>	
				<Route exact path="/classify" component={Classify}/>
				<Route exact path="/goodsDetail" component={GoodsDetail}/>
				<Route exact path="/home" component={Home}/>
				<Route exact path='/search/searchResult' component={SearchResult}/>
				<Route exact path='/article' component={SbysArticle}/>
				<Route exact path="/search" component={Search}/>
				<Route exact path="/classpage" component={Classpage}/>
				<Route path="/shoppingcar" component={ShoppingCar}/>
	      		<Route path="/login" component={Login}/>
	      		<Route path="/myregister" component={Myregister}/>
	      		<Route path="/changepassword" component={Changepassword}/>
	      		<Route path="/Myorder" component={Myorder}/>
	      		<Route path="/AppraiseList" component={AppraiseList}/>
	      		<Backtop/>
	      	</div>
		</Provider>
	</Router>
	,
	document.getElementById('root')	
)
registerServiceWorker();
