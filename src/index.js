import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//页面放这里
import App from './App';

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
	      	</div>
		</Provider>
	</Router>
	,
	document.getElementById('root')	
	)
registerServiceWorker();

