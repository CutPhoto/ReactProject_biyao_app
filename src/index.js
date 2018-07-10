import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//页面放这里
import ShoppingCar from './pages/ShoppingCar'
import Login from './pages/Login'
import Myregister from './pages/Myregister'
import Changepassword from './pages/Changepassword'
import Myorder from './pages/Myorder'
//引入阿里ant样式
// import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
//redux Provider是把store用在所有组件中
import { Provider } from 'react-redux';
//createStore是创建仓库的方法
import { createStore } from 'redux';
//引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Classify from './pages/classify/classify.js';
import Search from './pages/search/search.js';
import Classpage from './pages/classpage/classpage.js';
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
				<Route exact path="/search" component={Search}/>
				<Route exact path="/classpage" component={Classpage}/>
				<Route path="/shoppingcar" component={ShoppingCar}/>
	      		<Route path="/login" component={Login}/>
	      		<Route path="/myregister" component={Myregister}/>
	      		<Route path="/changepassword" component={Changepassword}/>
	      		<Route path="/Myorder" component={Myorder}/>
	      	</div>
		</Provider>
	</Router>
	,
	document.getElementById('root')	
)
registerServiceWorker();

