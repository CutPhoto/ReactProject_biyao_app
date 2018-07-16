import React, { Component } from 'react';
import PublicButtom from '../Mylogin/PublicButtom';
import HeaderLogin from '../Mylogin/HeaderLogin';
import './Shoppingcar.css';
class ShoppingCar extends Component {
	constructor(props){
		super(props)
		this.state = {
			qtycount:null,
			isShowEditor:true,
			textcontent:'购物车',
			shouldclear:false,
			clearid:null,
			goodslist:[]
			//[{id:1,shop:'衣服店',goodsName:'男士夏季超级冰凉无袖abcdfg',color:'黑色',size:'s',price:'209',qty:1,checked:false},
			//{id:2,shop:'衣服店',goodsName:'男士夏季超级冰凉无袖abcdfg',color:'黑色',size:'s',price:'209',qty:1,checked:false},
			//{id:3,shop:'衣服店',goodsName:'男士夏季超级冰凉无袖abcdfg',color:'黑色',size:'s',price:'209',qty:1,checked:false}]
		}

		this.cleargoods = this.cleargoods.bind(this)
		this.clearsure = this.clearsure.bind(this)
		this.showclearbtn = this.showclearbtn.bind(this)
		this.qtycountadd = this.qtycountadd.bind(this)
		this.qtycountreduce = this.qtycountreduce.bind(this)
		this.disabletrim = this.disabletrim.bind(this)
		this.changechecked = this.changechecked.bind(this)
		this.allClick = this.allClick.bind(this)
		this.settlement = this.settlement.bind(this)
	}
	clearsure(e){
		if(e.target.innerHTML==='确定'){
			var arr = []
			for(let i = 0; i<this.state.goodslist.length ; i++){
				arr.push(this.state.goodslist[i])
			}
			arr.splice(this.state.clearid,1)	
			//发送ajax请求修改购物车数据
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					//console.log(JSON.parse(xhr.responseText))
				}
			}
			//console.log(`http://localhost:8081/removeToCart?suid=${this.state.goodslist[this.state.clearid].id}`)
			xhr.open('get',`http://localhost:8081/removeToCart?suid=${this.state.goodslist[this.state.clearid].id}`,true)
			xhr.send();
			this.setState({
				goodslist:arr,
				clearid:null,
				shouldclear:false
			})

		}else if(e.target.innerHTML==='取消'){
			this.setState({
				clearid:null,
				shouldclear:false
			})
		}else{
			this.setState({
				clearid:null,
				shouldclear:false
			})
		}
	}
	cleargoods(id) {
		this.setState({
				clearid:id,
				shouldclear: true
			})	
	}
	showclearbtn(e){
		var a = e.target.getAttribute('data-status')
		if(a == 0){
			e.target.innerHTML = '完成'
			e.target.setAttribute('data-status','1')
			//显示删除按钮
			e.target.parentNode.nextElementSibling.children[1].style.display = "none";
			e.target.parentNode.nextElementSibling.children[2].style.display = "flex";

		}else if(a == 1){
			e.target.innerHTML = '编辑'
			e.target.setAttribute('data-status','0')
			//隐藏删除按钮
			e.target.parentNode.nextElementSibling.children[1].style.display = "block";
			e.target.parentNode.nextElementSibling.children[2].style.display = "none";
		}
	}
	//按钮加一
	qtycountadd(e,index){
		var arr = [];
		arr = [...this.state.goodslist];
		arr[index].qty++;
		this.setState({
			goodslist:arr
		})	
	}
	//按钮减一
	qtycountreduce(e,index){
		var arr = [];
		arr = [...this.state.goodslist];
		if(arr[index].qty <= 1){
			arr[index].qty = 1;
		} else {
			arr[index].qty--
		}

		this.setState({
			goodslist:arr
		})	
	}
	changevalue(e,item,index){
		var qty = e.target.value;
		if(qty<0) 
		qty = 1
		item.qty = qty
		var arr = [...this.state.goodslist]	
		this.setState({
			goodslist:arr
		})	
	}
	disabletrim(e,item){
		
		if(!e.target.value) 
		item.qty = 1
		var arr = [...this.state.goodslist]	
		this.setState({
			goodslist:arr
		})	
	}
	changechecked(e,item){
		item.checked = e.target.checked;
		this.setState({
			goodslist:this.state.goodslist
		});
		var res = true;
		var inputs = document.getElementsByClassName('inputs');
		for(var i = 0; i < inputs.length; i++){
			if(!inputs[i].checked){
				res = false
			}
		}
		this.refs.allchecked.checked=res

	}
	allClick(e){
		var inputs = document.getElementsByClassName('inputs');
		for(var i = 0; i < inputs.length; i++){
			inputs[i].checked = e.target.checked 
		}
		this.state.goodslist.forEach((item)=>{
			item.checked = e.target.checked
		})
		this.setState({
			goodslist:this.state.goodslist
		});
				
	}
	headerCallback(e){
		var a =document.getElementsByClassName('datastatus');
		var b =document.getElementsByClassName('goodsdetail');
		var c =document.getElementsByClassName('goodsclear');
		var d =document.getElementsByClassName('datastatus');
		if(e.target.innerHTML=="编辑"){
			e.target.innerHTML="完成"
			for(let j = 0; j<a.length; j++){
				d[j].innerHTML="完成"
			}
			for(let i = 0; i<a.length; i++){
				a[i].setAttribute('data-status','1');
				b[i].style.display="none";
				c[i].style.display="flex";
			}

		}
		else if(e.target.innerHTML=="完成"){
			e.target.innerHTML="编辑"
			for(let j = 0; j<a.length; j++){
				d[j].innerHTML="编辑"
			}
			for(let i = 0; i<a.length; i++){
				a[i].setAttribute('data-status','0');
				c[i].style.display="none";
				b[i].style.display="block";
			}
			//发送ajax请求
		}
	}
	settlement(){
		var res = false;
		var arr = []
		this.state.goodslist.forEach((item,index)=>{
			if(item.checked) {
				arr.push(item)
				res = true
				var xhr = new XMLHttpRequest();
				xhr.open('get',`http://localhost:8081/removeToCart?suid=${item.id}`,true)
				xhr.send();
			}
		})
		this.setState({
			goodslist:[...this.state.goodslist]
		})
		localStorage.setItem('settlement',JSON.stringify(arr));
		if(res){
			window.location.href = "/settlement" ;
		}else{
			alert('请选择需要结算的商品')
		}
	}
	componentWillMount(){
		var list = [] ;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				list = JSON.parse(JSON.stringify(xhr.responseText)
					.replace(/suid/g,"id")
					.replace(/num/g,"qty")
					.replace(/title/g,"goodsName"));
				
				list = eval("("+list+")")
				
				list.forEach((item)=>{
					item.checked = false;
				})
				this.setState({
					goodslist:list
				})
			}
		}.bind(this)
		xhr.open('get','http://localhost:8081/getCartList',true)
		xhr.send()
	
		

	}
	render() {
		return (
				<div className="shoppingcar">	
					<HeaderLogin callback={this.headerCallback} isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
					<div className="shoppingcar_main">
					<div className="goodsbox">
						{
							(()=>{
								if(this.state.goodslist)
								return this.state.goodslist.map((item,index)=>{
									return <div key={item.id} className="czzgoods">
												<div className="shopname">
													<input type="checkbox" onClick={(e)=>this.changechecked(e,item)} className="inputs"/>
														<i className="shopiconfont">&#xe736;</i>杂货店<i className="shopiconfont">&#xe735;</i>
													<span onClick={this.showclearbtn} data-status="0" className="datastatus">编辑</span>
												</div>
												<div className="goodscontent">
													
													<img src={item.imageUrl}/>
													<div className="goodsdetail">
														<div>{item.goodsName}</div>
														<div>颜色,大小</div>
														<div>
															<span>￥{item.price}</span>
																x
															<span>{item.qty}</span>
														</div>
													</div>	
													<div style={{display:'none'}} className="goodsclear">
														<span>
															<span className="reduceqty"   onClick = {(e)=>this.qtycountreduce(e,index)}>-</span>
															<input className="totalqtyvalue" type="number" value={item.qty} onBlur={(e)=>this.disabletrim(e,item,index)} onChange={(e)=>this.changevalue(e,item,index)}/>
															<span className="addqty" onClick = {(e)=>this.qtycountadd(e,index)}>+</span>
														</span>
														<span onClick={()=>this.cleargoods(index)} className="shopiconfont rubbish">
															&#xe61d;
														</span>
													</div>
												</div>
											</div>
								})
							})()
						}
					</div>	
					<div style={{display:this.state.goodslist.length?'block':'none'}} className="totalgoodsprice">
						<div>
							<input type="checkbox" ref = "allchecked" onClick={this.allClick}/>
							全选
						</div>
						<div>
							合计：
							<span>￥{
								(()=>{
									var total = 0;
									this.state.goodslist.forEach((item,index)=>{
										if(item.checked){
											total += item.price*1 * item.qty;
										}
									})
									return total
								})()
							}</span>
							<span onClick={this.settlement}>去结算</span>
						</div>
					</div>
					<div style={{display:this.state.shouldclear?'block':'none'}} className="goodsclearsure">
						<div>
							<h4>确定删除该商品？</h4>
							<span onClick={this.clearsure}>取消</span>
							<span onClick={this.clearsure}>确定</span>
						</div>
					</div>
					</div>
					<PublicButtom/>
				</div>
			)
	}
}
export default ShoppingCar