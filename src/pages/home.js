import React, {
	Component
} from "react"

import $ from 'jquery'

import Xheader from '../components/home/header';
import Xpanel from '../components/home/panel/panel';
import PublicButtom from '../Mylogin/PublicButtom.js';
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	
	componentDidMount() {
		$.ajax({
			type: "get",
			url: "http://10.3.134.38:8081/getGoodsList",

			data: {},

			async: true,

			success(data) {
				localStorage.setItem('goodsData', data)
			}
		});
	}



	render() {
		return(
			<div className="home_container" style={{
				backgroundColor:'#f2f2f2'
				}}>
				<Xheader/>
				<Xpanel/>
				<PublicButtom />
			</div>
		)

	}
}
export default Home