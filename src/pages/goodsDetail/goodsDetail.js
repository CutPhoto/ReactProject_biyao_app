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
		this.state = {
			goodsArr:[],
			classifyArr:[]
		}
	}
	componentWillMount(){
		let suid='';
		//获取商品id
		if(window.location.search){
		    var arr = ((window.location.search).slice(1)).split('&');
		    arr.forEach(function(items){
		        var newArr = items.split('=');
				suid = newArr[1];
				
		    })
	    }else{
	    		suid = '1300815218010000001'
	    }
	    //获取该商品详情信息
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				let goodsArr=JSON.parse(xhr.responseText);
				this.setState({
					goodsArr:[...goodsArr],
					
				})
				//获取该商品同分类商品
				var xhr1 = new XMLHttpRequest();
				xhr1.onreadystatechange = function() {
					if(xhr1.readyState == 4) {
						let goodsArr=JSON.parse(xhr1.responseText);
						this.setState({
							classifyArr:[...goodsArr],
						})
						
					}
				}.bind(this);
				xhr1.open("get",`http://localhost:8081/getClassify?classify=${goodsArr[0].classify}`, false);
				//4.向服务器发送请求
				xhr1.send(null);
			}
		}.bind(this);
		xhr.open("get",`http://localhost:8081/getDetails?suid=${suid}`, false);
		//4.向服务器发送请求
		xhr.send(null);
		
	}
	render() {
		return(
			<div>
				<GoodsDetailsBanner imageUrl={this.state.goodsArr[0].imageUrl}/>
				<GoodsDetailsTitle titles={this.state.goodsArr[0]}/>
				<GoodsDetailsServices/>
				<GoodsDetailsSize imageUrl={this.state.goodsArr[0]}/>
				<GoodsDetailsAddress/>
				<GoodsDetailsSizeContrast/>
				<GoodsDetailsTab type={"评价"}/>
				<a href="http://localhost:3000/AppraiseList">
				<GoodsDetailsAppraise/>
				</a>
				<GoodsDetailsShop/>
				<GoodsDetailsList list={this.state.classifyArr}/>
				<GoodsDetailsTab type={"详情"}/>
				<GoodsDetailsPage title1={this.state.goodsArr[0].title}/>
				<GoodsDetailsBuy suid={this.state.goodsArr[0].suid}/>
				<GoodsDetailsNav/>
			</div>
		)

	}
}
export default GoodsDetail