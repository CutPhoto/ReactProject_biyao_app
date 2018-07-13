import React, {
	Component
} from "react"

import './xcarPanel.css';

import '../../swiper-4.3.3.min.css';

import Swiper from 'swiper'

import $ from 'jquery'

export default class XaddCarHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topicData: [],
			suidData: [],
			isDingWeiIcon: false,
			isShowDialog: false,
			isShowBaozheng:false,
			isShowYixuan:false
		}
	}

	componentDidMount() {
		var mySwiper = new Swiper('.addshopcar_banner_box .swiper-container', {
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			}
		})

		let goodslist = JSON.parse(localStorage.getItem('goodsData'))
		let suid = JSON.parse(localStorage.getItem('goodsSuid'))
		this.setState({
			topicData: goodslist,
			suidData: suid
		})

	}

	showDialog() {
		this.setState({
			isShowDialog: true
		})
	}
	hidDialog() {
		this.setState({
			isShowDialog: false
		})
	}
	
	showBaozheng(){
		this.setState({
			isShowBaozheng: true
		})
	}
	
	hidBaozheng(){
		this.setState({
			isShowBaozheng: false
		})
	}
	
	showYixuan(){
		this.setState({
			isShowYixuan: true
		})
	}
	
	hidYixuan(){
		this.setState({
			isShowYixuan: false
		})
	}

	render() {
		return(
			<div>
				<div className='addshopcar_banner_box'>
		        	<div className='swiper-container'>
			            <div className='swiper-wrapper'>
				            {
					    		this.state.topicData.map((item,index) => {
					    			if(item.suid===this.state.suidData.suid){
					    				return <div className="swiper-slide" key={index} >
						    						<img className="xcarbanner_img" src={item.imageUrl} />
						    				   </div>
					    			}
					    			
					    		})
					    	}
			        	</div>
			            <div className="swiper-pagination swiper-pagination-fraction" id="swiper-pagination2" style={{
			            	color:'#fff',
			            	width:'56px',
			            	backgroundColor:'rgba(0,0,0,.3)',
			            	padding:'0 10px',
			            	marginRight:'10px',
			            	borderRadius:'20px',
			            	fontSize:'12px'
			            	}}>
			            	<span className="swiper-pagination-current"></span> / <span className="swiper-pagination-total"></span>          	
			            </div>
		            </div>
	        	</div>
	        	<div className='addshopcar_banner_bottom'>
	        		<h4>{this.state.suidData.title}</h4>
	        		<p className='addshopcar_banner_btmp'>{this.state.suidData.classify}</p>
	        		<div className='addshopcar_banner_btmcnt'>
	        			<span className='addshopcar_banner_price'>{this.state.suidData.price}</span>
	        			<span onClick={this.showDialog.bind(this)} className='addshopcar_banner_cycle'>生产周期为:5天</span>
	        		</div>
	        	</div>
	        	
	        	
		        
		        <div className="weui-cells" style={{marginTop:'0'}}>
		            <div className="weui-cell">
		                <div className="weui-cell__hd" style={{position: 'relative',marginRight: '10px'}}>
		                    <span style={{
		                    	border:'1px solid #4f93e2',
		                    	color:'#4f93e2',
		                    	fontSize:'12px',
		                    	padding:'0 5px',
		                    	borderRadius:'20px'
		                    }}>{this.state.suidData.supplierBackground}</span>
		                </div>
		            </div>
		            <div onClick={this.showBaozheng.bind(this)} className="weui-cell weui-cell_access"  style={{
		            		display:'flex',
		            		justifyContent: 'space-between',
		                	backgroundColor:'#F8F8F8'
		                }}>
	                    <ul className="carpanel_baozheng">
		                    <li><i className="iconfont icon-103"></i>七天无忧退货</li>
		                    <li><i className="iconfont icon-103"></i>现行赔付</li>
		                    <li><i className="iconfont icon-103"></i>超时赔偿</li>
		                    <li><i className="iconfont icon-103"></i>顺丰包邮</li>
	                    </ul>
		                <div className="weui-cell__ft"></div>
		            </div>
		            <div onClick={this.showYixuan.bind(this)} className="weui-cell weui-cell_access" style={{
		            		display:'flex',
		            		justifyContent: 'space-between'
		                }}>
		                <div className="carpanel_select">
							<span>已选择：&nbsp;</span>
							<div className="choosed-size-Exhibition">{this.state.suidData.title}1盒，1件</div>
						</div>
		                <div className="weui-cell__ft"></div>
		            </div>
		            
		            
		            
		            
		            <div className="weui-cell weui-cell_access" style={{
		            	display:'flex',
		            	justifyContent: 'space-between',
		            	fontSize:'10px'
		            }}>
		                <section className="my-address" id="my-address">
							<div className="padding_1">
								<div className="my-send clear" style={{
					            	display:'flex',
					            	justifyContent: 'space-between',
					            	fontSize:'10px',
					            	padding:0
					            }}>
									<b>配送至：&nbsp;</b>
									<span className="gl-location">
										<i className="iconfont icon-dingwei"></i>
									</span>
									<b id="distribution-location">广东省 广州市 越秀区 </b>
								</div>
								<div style={{
										marginLeft:'85px',
										color:'red'
									}}>可配送</div>
								</div>
						</section>
		                <div className="weui-cell__ft"></div>
		            </div>
		        </div>
		        
		        
		        
		        
		        <div className="js_dialog" id="iosDialog2" style={{display: this.state.isShowDialog?'block':'none'}}>
		            <div className="weui-mask"></div>
		            <div className="weui-dialog">
		            	<div className="weui-dialog-title">价格和生产周期说明</div>
		                <div className="weui-dialog__bd">根据所选规格的不同，价格可能会不同，最终价格以所选商品规格为准。为了让您买到最具性价比的商品，我们不会预先准备库存，因此会有一定的生产周期，请您耐心等待哦。</div>
		                <div className="weui-dialog__ft" onClick={this.hidDialog.bind(this)}>
		                    <a href="javascript:;" className="weui-dialog__btn weui-dialog__btn_primary">知道了</a>
		                </div>
		            </div>
		        </div>
		        
		        
		        
		        
		        <div className="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet" style={{transform:this.state.isShowBaozheng?'translateY(0)':'translateY(100%)'}}>		        	
		            <div className="weui-actionsheet__title" style={{
		                	backgroundColor:'#fff',
		                	borderTop:'1px solid #E8E8E8'
		                }}>
		                <p style={{
		                	textAlign:'center'
		                }}>服务说明</p>
		            </div>
		            <ul className="supplier-detial-content" style={{
		            	backgroundColor:'#fff',
		            	padding:'20px 20px'
		            }}>
						<li className="supplier-detial-item">
							<div className="supplier-detial-right-con">
								<div className="supplier-detial-title"><i className="iconfont icon-103"></i>7天无忧退货</div>
								<div className="supplier-detial-text">根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页。</div>
							</div>
						</li>
					
						<li className="supplier-detial-item">
							<div className="supplier-detial-right-con">
								<div className="supplier-detial-title"><i className="iconfont icon-103"></i>先行赔付</div>
								<div className="supplier-detial-text">争议可申诉，申诉成功，立即退款。</div>
							</div>
						</li>
					
						<li className="supplier-detial-item">
							<div className="supplier-detial-right-con">
								<div className="supplier-detial-title"><i className="iconfont icon-103"></i>超时赔偿</div>
								<div className="supplier-detial-text">未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。</div>
							</div>
						</li>
					
						<li className="supplier-detial-item">
							<div className="supplier-detial-right-con">
								<div className="supplier-detial-title"><i className="iconfont icon-103"></i>顺丰包邮</div>
								<div className="supplier-detial-text">运费由商家承担</div>
							</div>
						</li>
					
					</ul>
		            <div onClick={this.hidBaozheng.bind(this)} className="weui-actionsheet__action" style={{
		            	marginTop:'0'
		            	}}>
		                <div className="weui-actionsheet__cell" id="iosActionsheetCancel" style={{backgroundColor:'#7E4395',color:'#fff'}}>完成</div>
		            </div>
		        </div>
		        
		        
		        
		        <div style={{
		        	display:this.state.isShowYixuan?'block':'none'
		        }}>
			        <div className="weui-mask" id="iosMask" style={{opacity: 1}}></div>
			        <div className="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
			            <div className="carpanel_yixuan_top" style={{height:'100px'}}>
			                <img src={this.state.suidData.imageUrl}/>
			                <div className="carpanel_yixuan_topc">
			                	<span>{this.state.suidData.price}</span>
			                	<p>生产周期:5天</p>
			                	<p>已选择:{this.state.suidData.title}</p>
			                </div>
			                <span onClick={this.hidYixuan.bind(this)} className='carpanel_yixuan_x'>X</span>
			                
			            </div>
			            <div className="weui-actionsheet__menu">
			                <span>已选:{this.state.suidData.title}</span>
			            </div>
			            <div className="weui-actionsheet__menu">
			                <span>已选:(尺寸:)</span>
			            </div>
			            <div className="weui-actionsheet__action carpanel_yixuan_bottom" style={{
			            	display:'flex',
			            	marginTop:'0'
			            	}}>
			                <div className="weui-actionsheet__cell" style={{
			                	flex:1,
			            	}}>加入购物车</div>
			                <div className="weui-actionsheet__cell" style={{
			                	flex:1,
			                	backgroundColor:'#7e4395',
			                	color:'#fff'
			            	}}>立即购买</div>
			            </div>
			        </div>
			    </div>
		        
		        
	        </div>
		)
	}
}