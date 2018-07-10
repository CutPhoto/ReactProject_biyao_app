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


const store = createStore((state = {
	//存放数据
	isShowImg: false,
	imgSrc: ''
}, action) => {
	switch(action.type) {
		//case里面监听组件传过来的事件，触发动作
		case 'showImg':
			return Object.assign({}, state, {
				//在这里接收传过来的数据赋给store，进而修改数据
				isShowImg: action.isShowImg,
				imgSrc: action.imgSrc
			});
		default:
			return state;
	}
});

ReactDOM.render(
	<Router>
		<Provider store={ store } >
			<div>	
				<Route exact path="/classify" component={Classify}/>
				<Route exact path="/home" component={Home}/>
				<Route exact path='/search/searchResult' component={SearchResult}/>
				<Route exact path='/article' component={SbysArticle}/>
				<Route path="/shoppingcar" component={ShoppingCar}/>
	      		<Route path="/login" component={Login}/>
	      		<Route path="/myregister" component={Myregister}/>
	      		<Route path="/changepassword" component={Changepassword}/>
	      		<Route path="/Myorder" component={Myorder}/>
	      		<Backtop/>
	      	</div>
		</Provider>
	</Router>
	,
	document.getElementById('root')	
	)

registerServiceWorker();
