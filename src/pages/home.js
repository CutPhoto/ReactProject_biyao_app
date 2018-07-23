import React, {
	Component
} from "react"

import $ from 'jquery'
import './home.css'

import Xheader from '../components/home/header';
import Xpanel from '../components/home/panel/panel';
import PublicButtom from '../Mylogin/PublicButtom.js';
import Classpage from './classpage/classpage';
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isShowList:true
		}
	}


	render() {
		return(
			<div className="home_container" style={{
				backgroundColor:'#f2f2f2'
				}}>
				<Xheader/>
				<div className="home_main">
					<div style={{display:this.state.isShowList?'block':'none'}}>
						<Xpanel />
					</div>
					<div style={{display:this.state.isShowList?'none':'block'}}>
						<Classpage/>
					</div>
				</div>
				<PublicButtom />
			</div>
		)

	}
}
export default Home