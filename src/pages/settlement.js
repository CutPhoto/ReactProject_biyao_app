import React, { Component } from 'react';
import HeaderLogin from '../Mylogin/HeaderLogin';
import './settlement.css'
class Settlement extends Component {
	constructor(){
		super();
		this.state={

		}

	}
	componentWillMount() {
		var arr = JSON.parse(localStorage.getItem('settlement'))
		console.log(arr)
		this.setState({
			settlement:arr
		})
	} 
	render(){
		return(
			<div className="settlement">
				<HeaderLogin isShowEditor={false} textcontent="订单确认"/>
				<div className="address">
					<p>收货人：123 联系方式：13333333333</p>
					<p>收货地址：</p>
				</div>	
				<div className="alert">因商品存在一定的生产周期，请仔细核实收货地址，提交订单后将不能修改收货地址。</div>
				<div  className="orderitems">
					{
						this.state.settlement.map((item)=>{
								console.log(item)
								return (
										<div className="orderitem">
											<h3>杂货店</h3>
											<div>
												<img src ={item.imageUrl} />
												<p>{item.goodsName}</p>
												<p>	
													<span>￥{item.price}</span>
													<br />
													<span>x{item.qty}</span>
												</p>
											</div>
											<div className="clientmsg">
												<p>
													<span>配送方式</span>
													<span>顺丰快递</span>
												</p>
												<textarea placeholder="输入留言内容"></textarea>
												<p className="singleprice">
													<span>共同{item.qty}件</span>
													<span>合计：￥{item.price}</span>
												</p>
											</div>
										</div>
									)
						})
					
					}
				</div>
				<div className="sureprice">
					<span>实付款： ￥{
						((self)=>{
							var total = 0;
							return self.state.settlement.map((item)=>{
								total = total*1 + item.price*1
								
								return total;
							})
						})(this)
						
					}</span>
					<span>结算</span>
				</div>
			</div>
			)
	}
}
export default Settlement;