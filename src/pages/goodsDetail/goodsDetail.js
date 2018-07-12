import React, {
	Component
} from "react"
//样式
import './goodsDetail.css'

import GoodsDetailsBanner from './../../components/goodsDetails/goodsDetailsBanner.js';
import GoodsDetailsTitle from './../../components/goodsDetails/goodsDetailsTitle.js';
import GoodsDetailsServices from './../../components/goodsDetails/goodsDetailsServices.js';
import GoodsDetailsSize from './../../components/goodsDetails/goodsDetailsSize.js';
import GoodsDetailsAddress from './../../components/goodsDetails/goodsDetailsAddress.js';
import GoodsDetailsSizeContrast from './../../components/goodsDetails/goodsDetailsSizeContrast.js';
import GoodsDetailsTab from './../../components/goodsDetails/goodsDetailsTab.js';

import GoodsDetailsAppraise from './../../components/goodsDetails/goodsDetailsAppraise.js';

import GoodsDetailsShop from './../../components/goodsDetails/goodsDetailsShop.js';
import GoodsDetailsList from './../../components/goodsDetails/goodsDetailsList.js';
import GoodsDetailsPage from './../../components/goodsDetails/goodsDetailsPage.js';
import GoodsDetailsBuy from './../../components/goodsDetails/goodsDetailsBuy.js';
import GoodsDetailsNav from './../../components/goodsDetails/goodsDetailsNav.js';
class GoodsDetail extends Component {
	constructor(props) {
		super()
		this.state = {}
	}
	componentDidMount(){
//		var xhr = new XMLHttpRequest();
//		xhr.onreadystatechange = function() {
//			if(xhr.readyState == 4) {
//				alert(xhr.responseText);
//				if(xhr.responseText=="登录成功！"){
//					window.location.href="/Myorder";
//				}
//			}
//		}
//		xhr.open("post",'http://localhost:8081/login', true);
//		//用post请求必须加上这一句
//		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
//		//4.向服务器发送请求
//		xhr.send(`userPhone=${this.state.userPhone}&passWord=${this.state.passWord}`);
	}
	render() {
		return(
			<div>
				<GoodsDetailsBanner/>
				<GoodsDetailsTitle/>
				<GoodsDetailsServices/>
				<GoodsDetailsSize/>
				<GoodsDetailsAddress/>
				<GoodsDetailsSizeContrast/>
				<GoodsDetailsTab/>
				<GoodsDetailsAppraise/>
				<GoodsDetailsShop/>
				<GoodsDetailsList/>
				<GoodsDetailsTab/>
				<GoodsDetailsPage/>
				<GoodsDetailsBuy/>
				<GoodsDetailsNav/>
			</div>
		)

	}
}
export default GoodsDetail