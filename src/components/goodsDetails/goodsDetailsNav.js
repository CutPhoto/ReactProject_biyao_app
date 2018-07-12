import React, {
	Component
} from 'react';
import './goodsDetailsNav.css'
//html
export default class  GoodsDetailsNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 0,
			tabs1:true,
			tabs2:false,
			tabs3:false,
			tabs4:false,
		}
	}
	
    componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler.bind(this));
    }
    scrollHandler() {
        let scrollTop = window.scrollY;
        if(scrollTop>130){
        		this.setState({
        			opacity:1
        		});
        }else{
        		this.setState({
        			opacity:scrollTop/13
        		});
        }
        if(scrollTop<=617){
        		this.setState({
        			tabs1:true,
				tabs2:false,
				tabs3:false,
				tabs4:false
        		});
        }
         if(scrollTop>617&&scrollTop<=1045){
        		this.setState({
        			tabs1:false,
				tabs2:true,
				tabs3:false,
				tabs4:false
        		});
        }
         else if(scrollTop>1045&&scrollTop<=1545){
         	this.setState({
        			tabs1:false,
				tabs2:false,
				tabs3:true,
				tabs4:false
        		});
         }
        
    }
	
	render() {
		return(
			<div className="goodsDetailsNav">
		      	<ul className="tabs" style={{opacity: this.state.opacity, transform:' scaleY(1)'}}>
					<li className={this.state.tabs1?"commodity active":"commodity"}>
						<img className={this.state.tabs1?"dingwei tabs1":"dingwei"} src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b"/>
						商品
					</li>
					<li className={this.state.tabs2?"evaluate active":"evaluate"}>
						<img className={this.state.tabs2?"dingwei tabs1":"dingwei"} src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b"/>
						评价
					</li>
					<li className={this.state.tabs3?"details active":"details"}>
						<img className={this.state.tabs3?"dingwei tabs1":"dingwei"} src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b"/>
						详情
					</li>
					<li className={this.state.tabs4?"recommend active":"recommend"}>
						<img className={this.state.tabs4?"dingwei tabs1":"dingwei"} src="https://static.biyao.com/m/img/product/dingwei.png?v=biyao_0dc5b9b"/>
						推荐
					</li>
				</ul>
		    </div>
		);
	}
}