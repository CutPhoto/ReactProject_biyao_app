import React, { Component } from 'react';
import PublicButtom from '../Mylogin/PublicButtom';
import HeaderLogin from '../Mylogin/HeaderLogin'
class ShoppingCar extends Component {
	constructor(props){
		super(props)
		this.state = {
			isShowEditor:false,
			textcontent:'购物车'
		}

	}
	render() {
		return (
				<div>	
					<HeaderLogin isShowEditor={this.state.isShowEditor} textcontent={this.state.textcontent}/>
					<PublicButtom/>
				</div>
			)
	}
}
export default ShoppingCar