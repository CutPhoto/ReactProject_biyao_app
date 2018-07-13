import React, {
	Component
} from "react"

import $ from "jquery"

import XaddCarHeader from '../../components/xaddShoppingCar/xaddCarHeader'

import XaddCarFooter from '../../components/xaddShoppingCar/xaddCarFooter'

import XcarPanel from '../../components/xaddShoppingCar/xcarPanel'

export default class AddShoppingCar extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return(
			<div>
				<XaddCarHeader/>
				<XcarPanel/>
				<XaddCarFooter/>
				<div style={{height:'500px'}}></div>
			</div>
		)

	}
}